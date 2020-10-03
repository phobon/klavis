import styled from "@emotion/styled";
import {
  compose,
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  PositionProps,
  TextStyleProps,
} from "styled-system";
import { shouldForwardProp } from "../../utils/shouldForwardProp";

import {
  cover,
  fullWidth,
  fullHeight,
  gridPosition,
  CoverProps,
  FullWidthProps,
  FullHeightProps,
  GridPositionProps,
} from "../../utils";

const textSystem = compose(
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
  gridPosition,
  cover,
  fullWidth,
  fullHeight
);

export type TextProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  PositionProps &
  TextStyleProps &
  CoverProps &
  FullWidthProps &
  FullHeightProps &
  GridPositionProps &
  React.HTMLAttributes<HTMLSpanElement>;

export const Text = styled("span", { shouldForwardProp })<TextProps>(
  {
    boxSizing: "border-box",
    display: "block",
  },
  textSystem
);

Text.displayName = "Text";

const defaultProps: any = {
  color: "foreground",
  fontSize: 1,
  textAlign: "left",
  lineHeight: 4,
};
Text.defaultProps = defaultProps;
