/** @jsx jsx */
import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";
import {
  compose,
  space,
  color,
  borderRadius,
  position,
  SpaceProps,
  ColorProps,
  BorderRadiusProps,
  PositionProps,
} from "styled-system";
import themeGet from "@styled-system/theme-get";
import {
  focus,
  Vector,
  gridPosition,
  shouldForwardProp,
  GridPositionProps,
} from "@phobon/base";

import { withTooltip, TooltipProps } from "../Tooltip";

const toggleSize = (props) => {
  const sizes = {
    s: {
      width: props.theme.space[5],
      height: props.theme.space[3],
      paddingRight: 4,
      "&::before": {
        width: 10,
        height: 10,
      },
      "&[aria-checked='true']": {
        "&::before": {
          transform: "translateX(16px)",
        },
      },
    },
    m: {
      width: props.theme.space[6],
      height: props.theme.space[4],
      paddingRight: 6,
      "&::before": {
        width: 18,
        height: 18,
      },
      "&[aria-checked='true']": {
        "&::before": {
          transform: "translateX(24px)",
        },
      },
    },
  };

  return sizes[props.size];
};

const toggleButtonSystem = compose(
  space,
  color,
  borderRadius,
  position,
  gridPosition
);

interface IToggleProps {
  size?: "s" | "m";
  toggled?: boolean;
  bg?: string;
}

export type ToggleProps = IToggleProps &
  ColorProps &
  TooltipProps &
  SpaceProps &
  BorderRadiusProps &
  PositionProps &
  GridPositionProps;

const ToggleButton = styled("button", {
  shouldForwardProp,
})<ToggleProps>(
  (props: any) => ({
    display: "flex",
    boxSizing: "border-box",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 0,
    border: 0,
    cursor: "pointer",
    transition: "opacity 120ms ease-out, background-color 120ms ease-out",
    svg: {
      fill: "white",
    },
    ...focus,
    "&:disabled": {
      opacity: 0.5,
      svg: {
        fill: props.theme.colors.grayscale[4],
      },
      backgroundColor: props.theme.colors.grayscale[6],
      "&::before": {
        backgroundColor: props.theme.colors.grayscale[5],
      },
      pointerEvents: "none",
    },
    ...toggleSize(props),
  }),
  toggleButtonSystem
);

const StyledToggle: React.FunctionComponent<ToggleProps & any> = forwardRef(
  ({ toggled, disabled, size, bg, ...props }, ref) => (
    <ToggleButton
      aria-checked={toggled}
      aria-readonly={disabled}
      disabled={disabled}
      borderRadius={5}
      size={size}
      ref={ref}
      role="switch"
      {...props}
      css={(theme: any) => ({
        "&::before": {
          content: "''",
          borderRadius: "50%",
          backgroundColor: theme.colors.background,
          position: "absolute",
          top: 3,
          left: 3,
          transition: "transform 180ms cubic-bezier(0.19, 1, 0.22, 1)",
        },
        "&[aria-checked='false']": {
          backgroundColor: theme.colors.grayscale[4],
          "&:hover": {
            backgroundColor: theme.colors.grayscale[3],
          },
          "&::before": {
            transform: "translateX(0)",
          },
        },
        "&[aria-checked='true']": {
          backgroundColor: themeGet(`colors.${bg[0]}`)({ theme }),
          "&:hover": {
            backgroundColor: themeGet(`colors.${bg[1]}`)({ theme }),
          },
        },
      })}
    >
      {!toggled && (
        <Vector
          width={size === "m" ? 12 : 8}
          height={size === "m" ? 12 : 8}
          viewBox="0 0 16 16"
        >
          <path d="M15.9999 1.77777L14.2222 0L7.99999 6.22219L1.7778 0L2.46126e-05 1.77777L6.22222 7.99996L0 14.2222L1.77777 16L7.99999 9.77774L14.2222 16L16 14.2222L9.77776 7.99996L15.9999 1.77777Z" />
        </Vector>
      )}
    </ToggleButton>
  )
);

StyledToggle.defaultProps = {
  size: "m",
  toggled: false,
  bg: ["greens.6", "greens.5"],
  type: "button",
};

export const Toggle = withTooltip(StyledToggle);

Toggle.displayName = "Toggle";
