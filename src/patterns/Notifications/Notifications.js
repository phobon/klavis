import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import Close from 'rmdi/lib/Close';

import { Flex, Card, usePortal } from '@phobon/base';
import { SquareButton } from '../../components';

import NotificationsContext from './NotificationsContext';

let id = 0;

const NotificationCard = styled(Card)`
  pointer-events: all;
`;

const Notifications = ({ children, timeout, config }) => {
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);

  const add = useCallback(props => setItems(state => [...state, { key: id++, ...props }]), []);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: 'translate(0px, 8px)', life: '0%' },
    enter: () => async next =>
        next({ opacity: 1, transform: 'translate(0px, 0px)', life: '0%' }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ life: '100%' });
      await next({ opacity: 0, transform: 'translate(32px, 0px)' });
    },
    onRest: item => setItems(state => {
      return state.filter(i => i.key !== item.key);
    }),
    config: (item, state) => {
      const c = item.config || config;
      const duration = item.timeout || timeout;
      return state === 'leave' ? [{ duration }, c] : c
    },
  });

  return (
    <NotificationsContext.Provider value={add}>
      <React.Fragment>
        {usePortal(
          transitions.map(({ key, item, props: { ...style } }) => {
            const { content, canDismiss } = item;
            return (
              <animated.div key={key} style={style}>
                <NotificationCard
                  p={3}
                  mb={4}
                  mx={4}
                  minWidth={250}>
                  <Flex justifyContent="flex-start" alignItems="flex-start">
                    <Flex justifyContent="flex-start">
                      {content}
                    </Flex>
                    {canDismiss && (
                      <SquareButton
                        variant="subtle"
                        size="s"
                        ml={4}
                        onClick={e => {
                          e.stopPropagation();
                          if (cancelMap.has(item)) {
                            const x = cancelMap.get(item);
                            x();
                          }
                        }}>
                        <Close color="inherit" />
                      </SquareButton>
                    )}
                  </Flex>
                </NotificationCard>
              </animated.div>
            );
          })
        )}
        {children}
      </React.Fragment>
    </NotificationsContext.Provider>
  );
};

Notifications.propTypes = {
  children: PropTypes.node,

  timeout: PropTypes.number,

  config: PropTypes.object,
};

Notifications.defaultProps = {
  children: null,
  timeout: 3000,
  config: { tension: 125, friction: 20, precision: 0.1 },
};

export default Notifications;