import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import themeGet from "@styled-system/theme-get";

import { Box, BoxProps, boxSystem } from "./Box";

import { destructureLayoutProps } from "../../utils";
import { containerStyles } from "./containerProps";

import { motion } from "framer-motion";

const scrollDirectionProps = ({ scrollDirection = "vertical" }) => {
  const scrollDirections = {
    vertical: {
      overflowY: "scroll",
      flexDirection: "column",
      "> div": {
        position: "absolute",
        flexDirection: "column",
        top: 0,
        left: 0,
        right: 0,
      },
    },
    horizontal: {
      overflowX: "scroll",
      "> div": {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      },
    },
  };

  return scrollDirections[scrollDirection];
};

const minimalStyle = ({ minimal = false, ...props }) => {
  if (minimal) {
    const color =
      themeGet(`colors.${props.scrollbarColor}`)(props) || props.scrollbarColor;
    return {
      "&:hover": {
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: color,
        },
      },
      "&::-webkit-scrollbar": {
        width: props.theme.space[1],
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "inherit",
        borderRadius: props.theme.radii[3],
      },
      "&::-webkit-scrollbar-thumb": {
        transition: "background-color 180ms ease-out",
        backgroundColor: color,
        borderRadius: props.theme.radii[3],

        "&:hover": {
          backgroundColor: color,
        },
      },
    };
  }

  return null;
};

export interface IScrollableProps {
  minimal?: boolean;
  scrollDirection?: "vertical" | "horizontal";
  scrollbarColor?: string;
}
export type ScrollableProps = IScrollableProps & BoxProps;
export const ScrollableContainer = motion(styled("div")<ScrollableProps>(
  {
    position: "relative",
    overflow: "hidden",
    alignItems: "flex-start",
    justifycontent: "flex-start",
  },
  containerStyles,
  scrollDirectionProps,
  minimalStyle,
  boxSystem
));

export const Scrollable: React.FunctionComponent<PropsWithChildren<ScrollableProps>> = ({
  minimal,
  scrollDirection,
  scrollbarColor,
  children,
  ...props
}) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  const {
    width,
    height,
    fullWidth,
    fullHeight,
    flex,
    gridArea,
    ...rest
  } = layoutProps;
  const containerProps: any = {
    width,
    height,
    fullWidth,
    fullHeight,
    flex,
    gridArea,
  };
  return (
    <ScrollableContainer
      minimal={minimal}
      scrollDirection={scrollDirection}
      scrollbarColor={scrollbarColor}
      layoutScroll
      {...containerProps}
    >
      <Box
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        {...passthroughProps}
        {...rest}
      >
        {children}
      </Box>
    </ScrollableContainer>
  );
};

Scrollable.displayName = "Scrollable";

Scrollable.defaultProps = {
  minimal: false,
  scrollDirection: "vertical",
  scrollbarColor: "hsla(0, 0%, 0%, 0.4)",
  flex: 1,
  width: "inherit",
  height: "inherit",
};
