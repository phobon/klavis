import styled from "@emotion/styled";
import {
  compose,
  space,
  color,
  fontSize,
  lineHeight,
  borderRadius,
  SpaceProps,
  ColorProps,
  FontSizeProps,
  LineHeightProps,
  BorderRadiusProps,
} from "styled-system";
import { shouldForwardProp } from "@phobon/base";

const tagSystem = compose(space, color, fontSize, lineHeight, borderRadius);

export type TagProps = SpaceProps &
  ColorProps &
  FontSizeProps &
  LineHeightProps &
  BorderRadiusProps;

export const Tag = styled("div", {
  shouldForwardProp,
})<TagProps>(
  {
    maxWidth: "26rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  tagSystem
);

Tag.displayName = "Tag";

Tag.defaultProps = {
  color: "foreground",
  bg: "grayscale.7",
  lineHeight: 1.8,
  fontSize: 0,
  py: "1px",
  px: 2,
  borderRadius: 3,
};
