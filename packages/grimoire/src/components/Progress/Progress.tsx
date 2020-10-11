/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import React, { forwardRef } from "react";
import themeGet from "@styled-system/theme-get";
import { jsx } from "@emotion/react";
import { Stack, Box } from "@phobon/base";

import { ProgressStep } from "./ProgressStep";

const barOrientation = ({ orientation, theme, space }) => {
  const orientations = {
    horizontal: {
      height: theme.space[1],
      minWidth: space,
      "&::before": {
        width: "calc(100% + 4px)",
        height: "100%",
      },
    },
    vertical: {
      width: theme.space[1],
      minHeight: space,
      "&::before": {
        height: "calc(100% + 4px)",
        width: "100%",
      },
    },
  };

  return orientations[orientation];
};

interface IProgressProps {
  id: string;
  space: number;
  mode: "compact" | "full";
  color: string;
  fontSize: number;
  orientation: "horizontal" | "vertical";
}

export const Progress: React.FunctionComponent<IProgressProps & any> = forwardRef(
  (
    { id, children, mode, fontSize, color, bg, orientation, space, ...props },
    ref
  ) => {
    let currentShown = false;
    let currentIndex = 0;

    const mappedChildren = React.Children.map(children, (step, i) => {
      if (!step) {
        return null;
      }

      const { tooltip, onClick, current, ...stepProps } = step.props;

      const isLast = i === children.length - 1;
      if (current) {
        currentShown = true;
        currentIndex = i;
      }


      const complete = !currentShown;
      return (
        <Box
          as="li"
          key={`${id}__step${i}`}
          flex={!isLast && mode === "full" ? "1 1 auto" : "none"}
          flexDirection="inherit"
        >
          <ProgressStep
            {...stepProps}
            orientation={orientation}
            current={current}
            complete={complete}
            disabled={current || !complete}
            tooltip={tooltip}
            color={color}
            bg={bg}
            mode={mode}
            fontSize={fontSize}
            onClick={onClick}
          >
            {mode === "full" && step.props.children}
          </ProgressStep>

          {!isLast && mode === "full" && (
            <Stack
              flex={1}
              bg={bg}
              space={space}
              css={theme => ({
                position: "relative",
                pointerEvents: "none",
                ...barOrientation({ orientation, theme, space }),
                "&::before": {
                  content: "''",
                  position: "absolute",
                  backgroundColor: themeGet(`colors.${color}`, theme.colors.accent[3])(theme),
                  opacity: complete ? 1 : 0,
                  transition: "opacity 180ms ease-out",
                  width: "100%",
                  height: "100%",
                },
              })}
            />
          )}
        </Box>
      );
    }).filter((n) => n);

    return (
      <Stack
        as="ul"
        ref={ref}
        flexDirection={orientation === "horizontal" ? "row" : "column"}
        fullWidth={mode === "full" && orientation === "horizontal"}
        fullHeight={mode === "full" && orientation === "vertical"}
        justifyContent={mode === "compact" ? "space-between" : "center"}
        {...props}
        role="progressbar"
        aria-valuenow={(currentIndex / children.length) * 100}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {mappedChildren}
      </Stack>
    );
  }
);

Progress.defaultProps = {
  mode: "full",
  space: 80,
  color: "accent.5",
  fontSize: 0,
  bg: "grayscale.6",
  orientation: "horizontal",
};
