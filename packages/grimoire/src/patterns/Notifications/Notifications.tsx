/** @jsx jsx */
import React, { useState, useCallback, forwardRef } from "react";
import { jsx } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";

import { Box, Stack, Card, Grid, CardProps } from "@phobon/base";
import { usePortal } from "@phobon/hooks";

import { Remove } from "../../icons/Remove";

import { Button } from "../../components";

import { NotificationsContext } from "./NotificationsContext";

let id = 0;

const notificationPositions = ({ notificationPosition }) => {
  const positions = {
    top: {
      justifySelf: "center",
    },
    bottom: {
      justifySelf: "center",
    },
  };

  return positions[notificationPosition];
};

const Lifebar = motion.custom(Box);

export interface INotificationProps {
  content: React.ReactNode;
  canDismiss?: boolean;
  color?: string;
  showLife?: boolean;
  timeout?: number;
}

export type NotificationPosition =
  | "topleft"
  | "top"
  | "topright"
  | "left"
  | "middle"
  | "right"
  | "bottomleft"
  | "bottom"
  | "bottomright";

export interface INotificationsProps {
  timeout?: number;
  showLife?: boolean;
  config?: any;
  notificationPosition?: NotificationPosition;
}

export type NotificationsProps = INotificationsProps &
  CardProps &
  React.HTMLAttributes<HTMLDivElement>;

type InternalNotification = INotificationProps & { key?: any };

export const Notifications = forwardRef<HTMLDivElement, NotificationsProps>(
  (
    {
      children,
      timeout = 10000,
      showLife = true,
      config = { tension: 125, friction: 20, precision: 0.1 },
      notificationPosition: initialNotificationPosition = "bottomright",
      width,
      ...props
    },
    ref: any
  ) => {
    const [items, setItems] = useState<InternalNotification[]>(
      [] as InternalNotification[]
    );
    const [notificationPosition, setNotificationPosition] = useState<
      NotificationPosition
    >(initialNotificationPosition);

    const add = useCallback(async ({ promise, ...p }) => {
      const k = id++;
      const to = p.timeout || timeout;
      setItems((state) => [...state, { key: k, ...p }]);
      if (promise) {
        await promise();
        setItems((state) => state.filter((i) => i.key !== k));
      } else if (to) {
        setTimeout(
          () => setItems((state) => state.filter((i) => i.key !== k)),
          to
        );
      }
    }, []);

    return (
      <NotificationsContext.Provider value={[add, setNotificationPosition]}>
        <React.Fragment>
          {children}

          {usePortal(
            <Grid
              id="grimoire__notifications"
              gridTemplateColumns="auto 1fr auto"
              gridTemplateRows="auto 1fr auto"
              gridTemplateAreas="'topleft top topright'
                                 'left middle right'
                                 'bottomleft bottom bottomright'"
              p={4}
              css={{
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
              }}
            >
              <Stack
                ref={ref}
                space={3}
                fullHeight
                css={{
                  gridArea: notificationPosition,
                  ...notificationPositions({ notificationPosition }),
                }}
                width={width}
                flexDirection="column"
              >
                <AnimatePresence>
                  {items.map(
                    ({
                      key,
                      content,
                      canDismiss,
                      color,
                      showLife: showLifeItem,
                      ...rest
                    }) => {
                      const showLifebar =
                        typeof showLifeItem === "undefined"
                          ? showLife
                          : showLifeItem;

                      const to = rest.timeout || timeout;
                      const seconds = ((to % 60000) / 1000).toFixed(0);
                      return (
                        <motion.div
                          className="grimoire__notifications__instance"
                          key={key}
                          layout
                          initial={{ opacity: 0, translateY: 24 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{
                            opacity: 0,
                            translateX: 24,
                            transition: { duration: 0.2 },
                          }}
                          css={{
                            width: "100%",
                          }}
                        >
                          <Card
                            fullWidth
                            css={{
                              pointerEvents: "all",
                              position: "relative",
                              "> div": {
                                overflow: "hidden",
                              },
                            }}
                            {...props}
                          >
                            <Box
                              flex={1}
                              css={{ position: "relative", overflow: "hidden" }}
                              justifyContent="flex-start"
                              alignItems="flex-start"
                              borderRadius="inherit"
                              overflow="hidden"
                            >
                              <Box flex={1} justifyContent="flex-start">
                                {content}
                              </Box>
                              {canDismiss && (
                                <Button
                                  variant="tertiary"
                                  size="s"
                                  shape="square"
                                  ml={4}
                                  mt={3}
                                  mr={3}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setItems((state) =>
                                      state.filter((i) => i.key !== key)
                                    );
                                  }}
                                >
                                  <Remove color="inherit" size={12} />
                                </Button>
                              )}
                              {showLifebar && (
                                <Lifebar
                                  css={{
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                  }}
                                  initial={{ x: 0 }}
                                  animate={{ x: "100%" }}
                                  transition={{
                                    duration: seconds,
                                    ease: "linear",
                                  }}
                                  height={4}
                                  bg={color || "grayscale.3"}
                                  fullWidth
                                />
                              )}
                            </Box>
                          </Card>
                        </motion.div>
                      );
                    }
                  )}
                </AnimatePresence>
              </Stack>
            </Grid>
          )}
        </React.Fragment>
      </NotificationsContext.Provider>
    );
  }
);

Notifications.defaultProps = {
  boxShadowIntensity: 0.7,
  boxShadowSize: "m",
  width: 350,
  borderRadius: 3,
};
