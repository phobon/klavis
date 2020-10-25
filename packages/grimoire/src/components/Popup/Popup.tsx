/** @jsx jsx */
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
} from "react";
import { jsx } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";

import { Box, destructureLayoutProps } from "@phobon/base";
import { useWindowSize } from "@phobon/hooks";

import { Button, ButtonProps } from "../Button";

const horizontalDirection = (popupDirection, distance = 8) => {
  const directions = {
    left: { right: `calc(100% + ${distance}px)` },
    right: { left: `calc(100% + ${distance}px)` },
  };

  return directions[popupDirection];
};

const verticalDirection = (popupDirection, distance = 4) => {
  const doubleDistance = distance * 2;
  const directions = {
    up: { bottom: `calc(100% + ${doubleDistance}px)` },
    down: { top: `calc(100% + ${doubleDistance}px)` },
    left: { top: 0 },
    right: { top: 0 },
    auto: { top: `calc(100% + ${doubleDistance}px)` },
  };

  return directions[popupDirection];
};

const reverseVerticalDirection = (popupDirection, distance = 4) => {
  const doubleDistance = distance * 2;
  const directions = {
    right: { bottom: 0 },
    left: { bottom: 0 },
    auto: { bottom: `calc(100% + ${doubleDistance}px)` },
  };

  return directions[popupDirection];
};

const enterDirection = (popupDirection, distance = 4) => {
  const directions = {
    down: { translateY: -distance },
    up: { translateY: distance },
    left: { translateX: distance },
    right: { translateX: -distance },
    auto: { translateY: -distance },
  };

  return directions[popupDirection];
};

const exitDirection = (popupDirection, distance = 4) => {
  const directions = {
    down: { translateY: -distance },
    up: { translateY: distance },
    left: { translateX: distance },
    right: { translateX: -distance },
    auto: { translateY: -distance },
  };

  return directions[popupDirection];
};

const determineHorizontalAlignment = (boundingRect, windowSize, setAlign) => {
  // Determine horizontal alignment.
  if (windowSize.innerWidth - boundingRect.right < 100) {
    setAlign({ right: 0 });
  }
};
const determineVerticalAlignment = (
  boundingRect,
  windowSize,
  setValign,
  childrenCount,
  popupDirection
) => {
  // Determine vertical alignment.
  if (windowSize.innerHeight - boundingRect.bottom < childrenCount * 32) {
    setValign(reverseVerticalDirection(popupDirection));
  }
};

/**
 * Custom hook to automatically determine the alignment of the popup window and setup transitions.
 */
const useAlignmentTransition = (
  popupDirection,
  isOpen,
  container,
  childrenCount,
  options
) => {
  const windowSize = useWindowSize();
  const [align, setAlign] = useState(
    horizontalDirection(popupDirection, options.distance)
  );
  const [valign, setValign] = useState(
    verticalDirection(popupDirection, options.distance)
  );
  // eslint-disable-next-line no-unused-vars
  const [enter] = useState(enterDirection(popupDirection, options.distance));
  // eslint-disable-next-line no-unused-vars
  const [exit] = useState(exitDirection(popupDirection, options.distance));

  useEffect(() => {
    if (container && container.current) {
      const b = container.current.getBoundingClientRect();

      if (popupDirection === "auto") {
        determineHorizontalAlignment(b, windowSize, setAlign);
        determineVerticalAlignment(
          b,
          windowSize,
          setValign,
          childrenCount,
          popupDirection
        );
      } else if (popupDirection === "right" || popupDirection === "left") {
        determineVerticalAlignment(
          b,
          windowSize,
          setValign,
          childrenCount,
          popupDirection
        );
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

export interface IMotionOptions {
  initial?: any;
  animate?: any;
  transition?: any;
}

export interface IPopupProps {
  trigger?: React.ReactNode;
  closeAfterAction?: boolean;
  popupDirection?: "up" | "down" | "left" | "right" | "auto";
  animationOptions?: { distance?: number };
}

export type PopupProps = IPopupProps &
  IMotionOptions &
  ButtonProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export const Popup = forwardRef<HTMLButtonElement, PopupProps>(
  (
    {
      trigger,
      children,
      closeAfterAction = false,
      className,
      popupDirection = "auto",
      initial = { opacity: 0 },
      animate = { opacity: 1, translateX: 0, translateY: 0 },
      transition = { duration: 0.15 },
      animationOptions = {
        distance: 4,
      },
      ...props
    },
    forwardedRef
  ) => {
    // Set up state and refs.
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef<any>(null);

    // Set up callbacks for when the container should open.
    const onClickOutside = useCallback(
      (e) => {
        if (!isOpen) {
          return;
        }

        if (container && !container.current.contains(e.target)) {
          setIsOpen(false);
        }
      },
      [isOpen]
    );
    const onClick = useCallback(
      (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      },
      [isOpen]
    );
    useEffect(() => {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }, [isOpen]);
    const containerClick = useCallback(
      (e) => {
        if (closeAfterAction) {
          e.preventDefault();
          setIsOpen(false);
        }
      },
      [closeAfterAction]
    );

    const motionCardProps = useAlignmentTransition(
      popupDirection,
      isOpen,
      container,
      Array.isArray(children) ? children.length : 1,
      animationOptions
    );

    // Destructure layout props here.
    const [layoutProps, passthroughProps] = destructureLayoutProps(props);

    return (
      <Box {...layoutProps} position="relative" ref={container}>
        <Button
          className={className}
          {...passthroughProps}
          toggled={isOpen}
          ref={forwardedRef}
          aria-expanded={isOpen}
          onClick={onClick}
        >
          {trigger}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              css={{ position: "absolute", zIndex: 1 }}
              initial={initial}
              animate={animate}
              transition={transition}
              onClick={containerClick}
              {...motionCardProps}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    );
  }
);
