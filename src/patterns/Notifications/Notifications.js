import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import Close from 'rmdi/lib/Close';

import { Flex, Box, Card, Grid, usePortal } from '@phobon/base';
import { SquareButton } from '../../components';

import NotificationsContext from './NotificationsContext';

let id = 0;

const NotificationCard = styled(Card)`
  pointer-events: all;

  /* TODO: Add styled-system prop on actual node */
  > div {
    overflow: hidden;
  }
`;

const NotificationsGrid = styled(Grid)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const NotificationContainer = animated(Box);

const Notifications = ({ children, timeout, config, target, ...props }) => {
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);

  const add = useCallback(props => setItems(state => [...state, { key: id++, ...props }]), []);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: 'translate(0px, 8px)', life: '0%' },
    enter: item => async next => {
      await next({ opacity: 1, transform: 'translate(0px, 0px)', life: '0%' });
      if (item.promise) {
        await item.promise();
      }
    },
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
      const duration = item.promise ? 1 : item.timeout || timeout;
      return state === 'leave' ? [{ duration }, c] : c
    },
  });

  return (
    <NotificationsContext.Provider value={add}>
      <React.Fragment>
        {children}
        <NotificationsGrid
          id="grimoire__notifications"
          gridTemplateColumns="repeat(3, 1fr)"
          gridTemplateRows="repeat(3, 1fr)"
          gridTemplateAreas="'topleft top topright'
                             'left middle right'
                             'bottomleft bottom bottomright'" />
        {usePortal(
          <Box flexDirection="column" gridArea={target}>
            {transitions.map(({ key, item, props: { ...style } }) => {
              const { content, canDismiss } = item;
              return (
                <NotificationContainer key={key} style={style} mx={4} mb={4}>
                  <NotificationCard minWidth={250} {...props}>
                    <Flex justifyContent="flex-start" alignItems="flex-start" borderRadius="inherit" overflow="hidden">
                      <Flex justifyContent="flex-start">
                        {content}
                      </Flex>
                      {canDismiss && (
                        <SquareButton
                          variant="subtle"
                          size="s"
                          ml={4}
                          mt={3}
                          mr={3}
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
                </NotificationContainer>
              );
            })}
          </Box>, 'grimoire__notifications')}
      </React.Fragment>
    </NotificationsContext.Provider>
  );
};

Notifications.propTypes = {
  children: PropTypes.node,
  timeout: PropTypes.number,
  config: PropTypes.object,
  target: PropTypes.oneOf(['topleft', 'top', 'topright', 'left', 'middle', 'right', 'bottomleft', 'bottom', 'bottomright']),
  boxShadowIntensity: PropTypes.number,
  boxShadowSize: PropTypes.oneOf(['none', 's', 'm', 'l', 'xl']),
};

Notifications.defaultProps = {
  children: null,
  timeout: 3000,
  config: { tension: 125, friction: 20, precision: 0.1 },
  target: 'topright',
  boxShadowIntensity: 0.7,
  boxShadowSize: 'm',
};

export default Notifications;