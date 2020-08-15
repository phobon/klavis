import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import { Box, Card, destructureLayoutProps } from '@phobon/base';
import { useWindowSize } from '@phobon/hooks';

import { Button } from '../Button';

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
  const [enter, setEnter] = useState(enterDirection(popupDirection));
  // eslint-disable-next-line no-unused-vars
  const [exit, setExit] = useState(exitDirection(popupDirection));

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

const Popup = forwardRef(({ trigger, children, label, closeAfterAction, className, as, popupDirection, ...props }, forwardedRef) => {
  // Set up state and refs.
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);

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
  const containerClick = closeAfterAction ? useCallback(() => setIsOpen(false), []) : null;

  const motionCardProps = useAlignmentTransition(popupDirection, isOpen, container, children.$$typeof ? 1 : children.length);

  // Destructure layout props here.
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  return (
    <Box 
      {...layoutProps}
      css={{ position: 'relative' }}
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

Popup.propTypes = {
  ...Button.propTypes,

  /** Trigger for the dropdown. This takes a _slots_ approach. */
  trigger: PropTypes.node,

  /** Children */
  children: PropTypes.node,

  /** Whether the container should close after an action, or not */
  closeAfterAction: PropTypes.bool,

  /** Optional container type */
  as: PropTypes.string,

  /** Popup direction. Can be one of 4 cardinal directions, adjusted  */
  popupDirection: PropTypes.oneOf(['up', 'down', 'left', 'right', 'auto']),
};

Popup.defaultProps = {
  trigger: null,
  children: null,
  closeAfterAction: false,
  as: 'div',
  popupDirection: 'auto',
};

export default Popup;