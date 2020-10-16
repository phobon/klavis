import styled from "@emotion/styled";
import { compose, space, layout, position, SpaceProps, LayoutProps, PositionProps } from "styled-system";
import { fullWidth, fullHeight, shouldForwardProp, FullWidthProps, FullHeightProps } from "@phobon/base";

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
        }
      }
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
        }
      }
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
        }
      }
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
        }
      }
    },
  };

  return tooltipDirections[props.tooltipDirection];
};

const tooltipSystem = compose(layout, position, space, fullWidth, fullHeight);

export interface ITooltipProps {
  tooltip?: string;
  tooltipDirection?: "down" | "up" | "left" | "right";
  offset?: number;
  as?: any;
}

export type TooltipProps = ITooltipProps & SpaceProps & LayoutProps & PositionProps & FullWidthProps & FullHeightProps;

export const Tooltip = styled("div", {
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
      }
    }
  }),
  tooltipSystem,
  direction,
);

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {
  tooltipDirection: "down",
  position: "relative",
};
