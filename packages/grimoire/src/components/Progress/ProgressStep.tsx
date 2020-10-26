/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

import {
  compose,
  color,
  layout,
  flexbox,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

import { Box, shouldForwardProp } from "@phobon/base";

import { withTooltip } from "../Tooltip";

const stepMode = ({ theme, mode }): any => {
  const stepModes = {
    compact: {
      width: theme.space[2],
      height: theme.space[2],
      margin: theme.space[1],
    },
    full: {
      width: theme.space[3],
      height: theme.space[3],
      "> div": {
        width: theme.space[3],
        height: theme.space[3],
      },
      "&::before": {
        content: "''",
        backgroundColor: theme.colors.background,
        borderRadius: "100%",
        width: "50%",
        height: "50%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        transition: "opacity 180ms ease-out",
      },
    },
  };

  return stepModes[mode];
};

const isCurrent = ({ color, theme, current, mode, orientation }): any => {
  const currentStates = {
    full: {
      backgroundColor: themeGet(
        `colors.${color}`,
        theme.colors.accent[5]
      )(theme),
      width: theme.space[4],
      height: theme.space[4],
      "&::before": {
        content: "''",
        opacity: 1,
      },
      "&::after": {
        color: theme.colors.grayscale[2],
      },
    },
    compact: {
      backgroundColor: themeGet(
        `colors.${color}`,
        theme.colors.accent[5]
      )(theme),
      borderRadius: 12,
      width: orientation === "horizontal" && `${theme.space[3]}px`,
      height: orientation === "vertical" && `${theme.space[3]}px`,
    },
  };

  return current && currentStates[mode];
};

const isComplete = ({ color, theme, complete, mode }): any => {
  const completeStates = {
    full: {
      backgroundColor: themeGet(
        `colors.${color}`,
        theme.colors.accent[5]
      )(theme),
    },
    compact: {
      backgroundColor: themeGet(
        `colors.${color}`,
        theme.colors.accent[6]
      )(theme),
    },
  };

  return complete && completeStates[mode];
};

const progressStepSystem = compose(color, layout, flexbox);

interface IProgressStepProps {
  orientation?: "horizontal" | "vertical";
  current?: boolean;
  complete?: boolean;
  mode?: "compact" | "full";
  childrenPosition?: "right" | "left";
  showLabels?: boolean;
}

type InternalProgressStepProps = IProgressStepProps &
  ColorProps &
  LayoutProps &
  FlexboxProps;

const ProgressStepButton = styled("button", {
  shouldForwardProp,
})<InternalProgressStepProps>(
  {
    border: 0,
    padding: 0,
    borderRadius: "50%",
    position: "relative",
    color: "white",
    transition: "transform 90ms ease-out, color 90ms ease-out",
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    "&:not(:disabled)": {
      pointerEvents: "all",
      cursor: "pointer",
    },
  },
  progressStepSystem,
  stepMode,
  isComplete,
  isCurrent
);

export type ProgressStepProps = InternalProgressStepProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

const StyledProgressStep = React.forwardRef<
  HTMLButtonElement,
  ProgressStepProps
>(
  (
    {
      children,
      orientation,
      alignItems,
      justifyContent,
      current,
      complete,
      childrenPosition,
      showLabels,
      ...props
    },
    ref
  ) => {
    let top = "50%";
    if (orientation === "horizontal") {
      top = current ? "calc(130% - 6px)" : "130%";
    }

    const spanCss: any = {
      position: "absolute",
      whiteSpace: "pre",
      top,
      transform: orientation === "vertical" ? "translateY(-50%)" : null,
      opacity: !current ? 0.4 : 1,
    };
    const p = childrenPosition === "right" ? "left" : "right";
    spanCss[p] = orientation === "vertical" ? "150%" : "unset";

    return (
      <Box
        position="relative"
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        <ProgressStepButton
          orientation={orientation}
          complete={complete}
          current={current}
          ref={ref}
          css={{
            "&::after": {
              display: showLabels ? "unset" : "initial",
            },
          }}
          {...props}
        />
        <span css={spanCss}>{children}</span>
      </Box>
    );
  }
);

export const ProgressStep = withTooltip<HTMLButtonElement, ProgressStepProps>(
  StyledProgressStep
);

ProgressStep.defaultProps = {
  orientation: "horizontal",
  mode: "full",
  current: false,
  complete: false,
  childrenPosition: "right",
  children: null,
  color: "accent.5",
  bg: "grayscale.6",
  alignItems: "flex-start",
  justifyContent: "center",
};
