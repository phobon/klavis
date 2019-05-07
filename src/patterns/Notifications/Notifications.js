import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { animated, useTransition } from 'react-spring';

import { Flex, Box, Card, Grid, usePortal } from '@phobon/base';


import Remove from '../../icons/Remove';

import { SquareButton } from '../../components';

import NotificationsContext from './NotificationsContext';

let id = 0;

const NotificationCard = styled(Card)`
  pointer-events: all;
  position: relative;

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
const Lifebar = animated(Box);

const Notifications = ({
  children,
  timeout,
  showLife,
  config,
  notificationPosition: initialNotificationPosition,
  width,
  ...props }) => {
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);
  const [notificationPosition, setNotificationPosition] = useState(initialNotificationPosition);

  const add = useCallback(p => setItems(state => [...state, { key: id++, ...p }]), []);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: 'translate(0px, 8px)', life: '100%' },
    enter: item => async (next, stop) => {
      cancelMap.set(item, () => {
        stop();
        setItems(state => state.filter(i => i.key !== item.key));
      });

      await next({
        opacity: 1,
        transform: 'translate(0px, 0px)',
        config,
      });

      if (item.promise) {
        await item.promise();
      } else {
        await next({ life: '0%', config: { duration: item.timeout || timeout }});
      }

      cancelMap.get(item)();
    },
    // eslint-disable-next-line no-unused-vars
    leave: item => async next => {
      await next({ opacity: 0, transform: 'translate(32px, 0px)', config });
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
              {transitions.map(({ key, item, props: { life, ...style } }) => {
                const { content, canDismiss, color, showLife: showLifeItem } = item;
                const showLifebar = typeof showLifeItem === 'undefined' ? showLife : showLifeItem;
                return (
                  <NotificationContainer
                    fullWidth
                    className="grimoire__notifications__instance"
                    key={key}
                    style={style}>
                    <NotificationCard fullWidth {...props}>
                      <Flex css={{ position: 'relative', overflow: 'hidden' }} justifyContent="flex-start" alignItems="flex-start" borderRadius="inherit" overflow="hidden">
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
                            <Remove color="inherit" size={12} />
                          </SquareButton>
                        )}
                        {showLifebar && <Lifebar style={{ position: 'absolute', right: life, top: 0 }} height={4} bg={color || 'grayscale.5'} fullWidth />}
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
  showLife: PropTypes.bool,
  config: PropTypes.object,
  notificationPosition: PropTypes.oneOf(['topleft', 'top', 'topright', 'left', 'middle', 'right', 'bottomleft', 'bottom', 'bottomright']),
  boxShadowIntensity: PropTypes.number,
  boxShadowSize: PropTypes.oneOf(['none', 's', 'm', 'l', 'xl']),
  width: PropTypes.number,
};

Notifications.defaultProps = {
  children: null,
  timeout: 10000,
  showLife: true,
  config: { tension: 125, friction: 20, precision: 0.1 },
  notificationPosition: 'bottomright',
  boxShadowIntensity: 0.7,
  boxShadowSize: 'm',
  width: 350,
};

export default Notifications;