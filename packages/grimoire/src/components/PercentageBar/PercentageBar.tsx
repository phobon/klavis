/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/** @jsx jsx */
import { forwardRef } from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";
import { color, ColorProps } from "styled-system";

import { Box, BoxProps, shouldForwardProp } from "@phobon/base";

import { Tag } from "../Tag";

const thresholdBg = (props: any) => {
  if (props.percentage < props.dangerThreshold) {
    return {
      backgroundColor: props.theme.colors.reds[6],
    };
  }

  if (props.percentage < props.warningThreshold) {
    return {
      backgroundColor: props.theme.colors.oranges[6],
    };
  }

  return {
    backgroundColor: props.theme.colors.greens[6],
  };
};

const heights = (props) => {
  const heightValues = {
    s: {
      height: props.theme.space[1],
    },
    m: {
      height: props.theme.space[2],
    },
    l: {
      height: props.theme.space[3],
    },
  };

  return heightValues[props.size];
};

export interface IPercentageBarProps {
  heading?: React.ReactNode;
  complete?: number;
  total?: number;
  dangerThreshold?: number;
  warningThreshold?: number;
  size?: "s" | "m" | "l";
  showPercentage?: boolean;
}

export type PercentageBarProps =
  IPercentageBarProps &
  ColorProps &
  BoxProps &
  React.HTMLAttributes<HTMLDivElement>;

const PercentageBarElement = styled("div", {
  shouldForwardProp,
})<PercentageBarProps & {
  rawPercentage?: number,
  percentage?: number
}>((props: any) => ({
    position: "relative",
    borderRadius: props.theme.radii[4],
    display: "flex",
    flex: "1 0 0%",
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      content: "''",
      height: "100%",
      width: "100%",
      left: 0,
      borderRadius: props.theme.radii[4],
      transformOrigin: "0 50%",
      transition: "transform 100ms ease-out",
      zIndex: 1,
      ...thresholdBg(props),
    }
  }),
  color,
  heights,
);

export const PercentageBar: React.FunctionComponent<PercentageBarProps> = forwardRef<HTMLDivElement, PercentageBarProps>(
  (
    {
      heading,
      total = 1,
      complete = 1,
      dangerThreshold,
      warningThreshold,
      showPercentage,
      size,
      bg,
      ...props
    },
    ref
  ) => {
    const rawPercentage = complete / total;
    const percentage = rawPercentage * 100;
    const percentageString = `${percentage}%`;

    return (
      <Box
        fullWidth
        ref={ref}
        {...props}
        flexDirection="column"
        alignItems="flex-start"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {heading}
        <Box fullWidth>
          <PercentageBarElement
            rawPercentage={rawPercentage}
            percentage={percentage}
            dangerThreshold={dangerThreshold}
            warningThreshold={warningThreshold}
            size={size}
            bg={bg}
            css={{
              "&::after": {
                transform: `translateX(${-100 + percentage}%)`,
              },
            }}
          />
          {showPercentage && (
            <Tag ml={2} bg="grayscale.1" color="background">
              {percentageString}
            </Tag>
          )}
        </Box>
      </Box>
    );
  }
);

PercentageBar.defaultProps = {
  dangerThreshold: 30,
  warningThreshold: 70,
  size: "m",
  showPercentage: false,
  bg: "grayscale.7",
};
