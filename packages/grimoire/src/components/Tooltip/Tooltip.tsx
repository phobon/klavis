import styled from "@emotion/styled";
import { compose, space, layout, position, SpaceProps, LayoutProps, PositionProps } from "styled-system";
import { fullWidth, fullHeight, shouldForwardProp, FullWidthProps, FullHeightProps } from "@phobon/base";

const direction = (props) => {
  const tooltipDirections = {
    down: {
      "&::after": {
        left: "50%",
        top: `calc(100% + ${props.theme.space[1]}px)`,
        transform: "translate(-50%, var(--factor))",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: `translate(-50%, calc(var(--factor) - ${props.theme.space[1]}px))`,
        }
      }
    },
    up: {
      "&::after": {
        left: "50%",
        bottom: `calc(100% + ${props.theme.space[1]}px)`,
        transform: "translate(-50%, var(--factor))",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: `translate(-50%, calc(var(--minusfactor) + ${props.theme.space[1]}px))`,
        }
      }
    },
    left: {
      "&::after": {
        top: "50%",
        left: 0,
        transform: "translate(calc(-100% - var(--xfactor)), -50%)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: "translate(calc(-100% - var(--factor)), -50%)",
        }
      }
    },
    right: {
      "&::after": {
        top: "50%",
        right: 0,
        transform: "translate(calc(100% + var(--xfactor)), -50%)",
      },
      "&:hover, &:focus, &:focus-within": {
        "&::after": {
          transform: "translate(calc(100% + var(--factor)), -50%)",
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
}

export type TooltipProps = ITooltipProps & SpaceProps & LayoutProps & PositionProps & FullWidthProps & FullHeightProps;

export const Tooltip = styled("div", {
  shouldForwardProp,
})<TooltipProps>(
  (props: any) => ({
    "--factor": props.theme.space[1] + props.theme.space[props.offset],
    "--minusfactor": -(props.theme.space[1] + props.theme.space[props.offset]),
    "--xfactor": props.theme.space[2] + props.theme.space[props.offset],
    "&::after": {
      content: '${(props) => props.tooltip}',
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
  direction
);

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {
  tooltip: null,
  tooltipDirection: "down",
  position: "relative",
  offset: 0,
};
