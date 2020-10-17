/** @jsx jsx */
import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react';
import { jsx } from "@emotion/react";
import { motion, AnimatePresence } from 'framer-motion';

import { Box, Card, destructureLayoutProps } from '@phobon/base';
import { useWindowSize } from '@phobon/hooks';

import { Button, ButtonProps } from '../Button';

const horizontalDirection = popupDirection => {
  const directions = {
    left: { right: 'calc(100% + 8px)' },
    right: { left: 'calc(100% + 8px)' },
    auto: { left: 0 },
  };

  return directions[popupDirection];
};

const verticalDirection = popupDirection => {
  const directions = {
    up: { bottom: 'calc(100% + 8px)' },
    down: { top: 'calc(100% + 8px)' },
    left: { top: 0 },
    right: { top: 0 },
    auto: { top: 'calc(100% + 8px)' },
  };

  return directions[popupDirection];
};
const reverseVerticalDirection = popupDirection => {
  const directions = {
    right: { bottom: 0 },
    left: { bottom: 0 },
    auto: { bottom: 'calc(100% + 8px)' },
  };

  return directions[popupDirection];
};

const enterDirection = popupDirection => {
  const directions = {
    down: { translateY: -4 },
    up: { translateY: 4 },
    left: { translateX: 4 },
    right: { translateX: -4 },
    auto: { translateY: -4 },
  };

  return directions[popupDirection];
};

const exitDirection = popupDirection => {
  const directions = {
    down: { translateY: -4 },
    up: { translateY: 4 },
    left: { translateX: 4 },
    right: { translateX: -4 },
    auto: { translateY: -4 },
  };

  return directions[popupDirection];
};

const determineHorizontalAlignment = (boundingRect, windowSize, setAlign) => {
  // Determine horizontal alignment.
  if (windowSize.innerWidth - boundingRect.right < 100) {
    setAlign({ right: 0 });
  }
};
const determineVerticalAlignment = (boundingRect, windowSize, setValign, childrenCount, popupDirection) => {
  // Determine vertical alignment.
  if (windowSize.innerHeight - boundingRect.bottom < childrenCount * 32) {
    setValign(reverseVerticalDirection(popupDirection));
  }
};

/**
 * Custom hook to automatically determine the alignment of the popup window and setup transitions.
 */
const useAlignmentTransition = (popupDirection, isOpen, container, childrenCount) => {
  const windowSize = useWindowSize();
  const [align, setAlign] = useState(horizontalDirection(popupDirection));
  const [valign, setValign] = useState(verticalDirection(popupDirection));
  // eslint-disable-next-line no-unused-vars
  const [enter] = useState(enterDirection(popupDirection));
  // eslint-disable-next-line no-unused-vars
  const [exit] = useState(exitDirection(popupDirection));

  useEffect(() => {
    if (container && container.current) {
      const b = container.current.getBoundingClientRect();
      
      if (popupDirection === 'auto') {
        determineHorizontalAlignment(b, windowSize, setAlign);
        determineVerticalAlignment(b, windowSize, setValign, childrenCount, popupDirection);
      } else if (popupDirection === 'right' || popupDirection === 'left') {
        determineVerticalAlignment(b, windowSize, setValign, childrenCount, popupDirection);
      } else {
        determineHorizontalAlignment(b, windowSize, setAlign);
      }
    }
  }, [isOpen]);

  return {
    style: {
      ...align,
      ...valign,
      ...enter,
    },
    exit: { opacity: 0, ...exit },
  };
};

export interface IPopupProps {
  label?: string;
  trigger?: React.ReactNode;
  closeAfterAction?: React.ReactNode;
  popupDirection?: 'up' | 'down' | 'left' | 'right' | 'auto';
  as?: React.ElementType<any>;
}

type PopupProps =
  IPopupProps &
  ButtonProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Popup: React.FunctionComponent<PopupProps> = forwardRef<HTMLDivElement, PopupProps>(
  ({ trigger, children, label, closeAfterAction, className, as, popupDirection, ...props }, forwardedRef) => {
  // Set up state and refs.
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<any>(null);

  // Set up callbacks for when the container should open.
  const onClickOutside = useCallback(e => {
    if (!isOpen) {
      return;
    }

    if (container && !container.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, [isOpen]);
  const onClick = useCallback(e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }, [isOpen]);
  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return (() => document.removeEventListener('mousedown', onClickOutside));
  }, [isOpen]);
  const containerClick: any = closeAfterAction ? useCallback(() => setIsOpen(false), []) : null;

  const motionCardProps = useAlignmentTransition(
    popupDirection,
    isOpen,
    container,
    Array.isArray(children) ? children.length : 1);
  
  // Destructure layout props here.
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  return (
    <Box 
      {...layoutProps}
      position="relative"
      ref={container}>
      <Button
        className={className}
        {...passthroughProps}
        toggled={isOpen}
        ref={forwardedRef}
        aria-expanded={isOpen}
        onClick={onClick}>
        {trigger}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            css={{ position: 'absolute', zIndex: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            {...motionCardProps}>
            <Card
              boxShadowSize="m"
              bg="background"
              borderRadius={4}
              as={as}
              flexDirection="column"
              onClick={containerClick}>
              {children}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
});

Popup.defaultProps = {
  trigger: null,
  children: null,
  closeAfterAction: false,
  as: 'div',
  popupDirection: 'auto',
};