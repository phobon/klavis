/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import {
  compose,
  space,
  layout,
  position,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from "styled-system";
import {
  fullWidth,
  fullHeight,
  shouldForwardProp,
  FullWidthProps,
  FullHeightProps,
} from "@phobon/base";
import { useEffect, useRef, useState } from "react";

const generateId = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};

const direction = (props) => {
  const tooltipDirections = {
    down: {
      "&::after": {
        left: "50%",
        top: `calc(100% + ${props.theme.space[1]}px)`,
        transform: "translate(-50%, 0)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: `translate(-50%, 4px)`,
        },
      },
    },
    up: {
      "&::after": {
        left: "50%",
        bottom: `calc(100% + ${props.theme.space[1]}px)`,
        transform: "translate(-50%, 0)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: `translate(-50%, -4px)`,
        },
      },
    },
    left: {
      "&::after": {
        top: "50%",
        right: "100%",
        transform: "translate(0, -50%)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: "translate(-4px, -50%)",
        },
      },
    },
    right: {
      "&::after": {
        top: "50%",
        left: "100%",
        transform: "translate(0, -50%)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: "translate(4px, -50%)",
        },
      },
    },
  };

  return tooltipDirections[props.tooltipDirection];
};

const tooltipSystem = compose(layout, position, space, fullWidth, fullHeight);

export interface ITooltipProps {
  tooltip?: string;
  tooltipDirection?: "down" | "up" | "left" | "right";
  offset?: number;
}

export type TooltipProps = ITooltipProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  FullWidthProps &
  FullHeightProps;

const StyledTooltip = styled("div", {
  shouldForwardProp,
})<TooltipProps>(
  (props: any) => ({
    "&::after": {
      content: `'${props.tooltip}'`,
      backgroundColor: props.theme.colors.grayscale[1],
      padding: `${props.theme.space[1]}px ${props.theme.space[2]}px`,
      color: props.theme.colors.background,
      borderRadius: props.theme.radii[3],
      fontSize: props.theme.fontSizes[0],
      position: "absolute",
      opacity: 0,
      transition: "opacity 80ms ease-out, transform 80ms ease-out",
      pointerEvents: "none",
      zIndex: 1,
      whiteSpace: "pre",
      display: "inline-table",
      /* willChange: "transform"; */
    },
    "&:hover, &:focus, &:focus-within": {
      "&::after": {
        opacity: 1,
      },
    },
  }),
  tooltipSystem,
  direction
);

export const Tooltip: React.FunctionComponent<TooltipProps &
  React.HTMLAttributes<HTMLDivElement>> = ({
  tooltip,
  tooltipDirection,
  children,
  ...props
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipId] = useState<string>(() => generateId());

  useEffect(() => {
    if (!tooltipRef.current) {
      return;
    }

    const showHandler = (e) => {
      e.currentTarget.setAttribute("aria-describedby", tooltipId);
    };
    const hideHandler = (e) => {
      e.currentTarget.removeAttribute("aria-describedby");
    };

    tooltipRef.current.addEventListener("focus", showHandler);
    tooltipRef.current.addEventListener("blur", hideHandler);
    tooltipRef.current.addEventListener("mouseover", showHandler);
    tooltipRef.current.addEventListener("mouseout", hideHandler);

    return () => {
      if (!tooltipRef.current) {
        return;
      }

      tooltipRef.current.removeEventListener("focus", showHandler);
      tooltipRef.current.removeEventListener("blur", hideHandler);
      tooltipRef.current.removeEventListener("mouseover", showHandler);
      tooltipRef.current.removeEventListener("mouseout", hideHandler);
    };
  }, [tooltipRef.current]);

  return (
    <StyledTooltip
      tooltip={tooltip}
      tooltipDirection={tooltipDirection}
      role="tooltip"
      ref={tooltipRef}
      {...props}
    >
      {children}
      {tooltip && (
        <span
          id={tooltipId}
          css={{
            position: "absolute",
            top: "auto",
            overflow: "hidden",
            left: -10000,
            width: 1,
            height: 1,
          }}
        >
          {tooltip}
        </span>
      )}
    </StyledTooltip>
  );
};

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {
  tooltipDirection: "down",
  position: "relative",
};
