import styled from "@emotion/styled";
import { compose, grid, GridProps as SystemGridProps } from "styled-system";

import { shouldForwardProp } from "../../utils/shouldForwardProp";

import {
  containerSystem,
  ContainerProps,
  containerStyles,
} from "./containerProps";

export type GridProps = ContainerProps & SystemGridProps;

export const Grid = styled("div", { shouldForwardProp })<GridProps>(
  {
    display: "grid",
    boxSizing: "border-box",
  },
  containerStyles,
  compose(containerSystem, grid)
);

Grid.displayName = "Grid";

Grid.defaultProps = {
  color: "foreground",
};
