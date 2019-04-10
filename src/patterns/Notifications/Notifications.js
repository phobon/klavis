import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const notificationPositions = props => {
  const positions = {
    top: css`
      justify-self: center;
    `,
    bottom: css`
      justify-self: center;
    `,
  };

  return positions[props.notificationPosition];
};

const NotificationsGrid = styled(Grid)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  padding: ${props => props.theme.space[4]}px;
`;

const NotificationsBox = styled(Box)`
  ${notificationPositions}

  .grimoire__notifications__instance {
    margin-bottom: ${props => props.theme.space[3]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const NotificationContainer = animated(Box);

const Notifications = ({ children, timeout, config, notificationPosition: initialNotificationPosition, width, ...props }) => {
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);
  const [notificationPosition, setNotificationPosition] = useState(initialNotificationPosition);

  const add = useCallback(p => setItems(state => [...state, { key: id++, ...p }]), []);

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
    <NotificationsContext.Provider value={[add, setNotificationPosition]}>
      <React.Fragment>
        {children}
        
        {usePortal(
          <NotificationsGrid
            id="grimoire__notifications"
            gridTemplateColumns="auto 1fr auto"
            gridTemplateRows="auto 1fr auto"
            gridTemplateAreas="'topleft top topright'
                              'left middle right'
                              'bottomleft bottom bottomright'">
            <NotificationsBox fullHeight css={{ gridArea: notificationPosition }} width={width} flexDirection="column" notificationPosition={notificationPosition}>
              {transitions.map(({ key, item, props: { notificationPosition: pos, ...style } }) => {
                const { content, canDismiss } = item;
                return (
                  <NotificationContainer
                    fullWidth
                    className="grimoire__notifications__instance"
                    key={key}
                    style={style}>
                    <NotificationCard fullWidth {...props}>
                      <Flex justifyContent="flex-start" alignItems="flex-start" borderRadius="inherit" overflow="hidden">
                        <Flex justifyContent="flex-start">
                          {content}
                        </Flex>
                        {canDismiss && (
                          <SquareButton
                            variant="tertiary"
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
            </NotificationsBox>
          </NotificationsGrid>
        )}
      </React.Fragment>
    </NotificationsContext.Provider>
  );
};

Notifications.propTypes = {
  children: PropTypes.node,
  timeout: PropTypes.number,
  config: PropTypes.object,
  notificationPosition: PropTypes.oneOf(['topleft', 'top', 'topright', 'left', 'middle', 'right', 'bottomleft', 'bottom', 'bottomright']),
  boxShadowIntensity: PropTypes.number,
  boxShadowSize: PropTypes.oneOf(['none', 's', 'm', 'l', 'xl']),
  width: PropTypes.number,
};

Notifications.defaultProps = {
  children: null,
  timeout: 3000,
  config: { tension: 125, friction: 20, precision: 0.1 },
  notificationPosition: 'bottomright',
  boxShadowIntensity: 0.7,
  boxShadowSize: 'm',
  width: 350,
};

export default Notifications;