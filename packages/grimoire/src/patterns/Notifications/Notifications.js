import React, { useState, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Box, Stack, Card, Grid, usePortal } from '@phobon/base';

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

const NotificationsBox = styled(Stack)`
  ${notificationPositions}
`;
const NotificationContainer = motion.custom(Box);
const Lifebar = motion.custom(Box);

const Notifications = forwardRef(({
  children,
  timeout,
  showLife,
  config,
  notificationPosition: initialNotificationPosition,
  width,
  ...props }, ref) => {
  const [items, setItems] = useState([]);
  const [notificationPosition, setNotificationPosition] = useState(initialNotificationPosition);

  const add = useCallback(async ({ promise, ...p }) => {
    const k = id++;
    const to = p.timeout || timeout;
    setItems(state => [...state, { key: k, ...p }]);
    if (promise) {
      await promise();
      setItems(state => state.filter(i => i.key !== k));
    } else if (to) {
      setTimeout(() => setItems(state => state.filter(i => i.key !== k)), to);
    }
  }, []);

  return (
    <NotificationsContext.Provider value={[add, setNotificationPosition]}>
      <>
        {children}
        
        {usePortal(
          <NotificationsGrid
            id="grimoire__notifications"
            gridTemplateColumns="auto 1fr auto"
            gridTemplateRows="auto 1fr auto"
            gridTemplateAreas="'topleft top topright'
                              'left middle right'
                              'bottomleft bottom bottomright'">
            <NotificationsBox ref={ref} space={3} fullHeight css={{ gridArea: notificationPosition }} width={width} flexDirection="column" notificationPosition={notificationPosition}>
              <AnimatePresence>
                {items.map(({ key, content, canDismiss, color, showLife: showLifeItem, ...rest }) => {
                  const showLifebar = typeof showLifeItem === 'undefined' ? showLife : showLifeItem;
                  const to = rest.timeout || timeout;
                  const seconds = ((to % 60000) / 1000).toFixed(0);
                  return (
                    <NotificationContainer
                      fullWidth
                      className="grimoire__notifications__instance"
                      key={key}
                      positionTransition
                      initial={{ opacity: 0, translateY: 24 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateX: 24, transition: { duration: 0.2 } }}>
                      <NotificationCard fullWidth {...props}>
                        <Box flex={1} css={{ position: 'relative', overflow: 'hidden' }} justifyContent="flex-start" alignItems="flex-start" borderRadius="inherit" overflow="hidden">
                          <Box flex={1} justifyContent="flex-start">
                            {content}
                          </Box>
                          {canDismiss && (
                            <SquareButton
                              variant="tertiary"
                              size="s"
                              ml={4}
                              mt={3}
                              mr={3}
                              onClick={e => {
                                e.stopPropagation();
                                setItems(state => state.filter(i => i.key !== key));
                              }}>
                              <Remove color="inherit" size={12} />
                            </SquareButton>
                          )}
                          {showLifebar && (
                            <Lifebar
                              css={{ position: 'absolute', top: 0, left: '-100%' }}
                              positionTransition
                              animate={{ translateX: '100%' }}
                              transition={{ duration: seconds, ease: 'linear' }}
                              height={4}
                              bg={color || 'grayscale.5'}
                              fullWidth />
                            )}
                        </Box>
                      </NotificationCard>
                    </NotificationContainer>
                  );
                })}
              </AnimatePresence>
            </NotificationsBox>
          </NotificationsGrid>)}
      </>
    </NotificationsContext.Provider>
  );
});

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