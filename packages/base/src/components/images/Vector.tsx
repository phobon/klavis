import React from "react";
import styled from "@emotion/styled";
import {
  compose,
  space,
  layout,
  borderRadius,
  background,
  position,
  SpaceProps, LayoutProps, BorderRadiusProps, BackgroundProps, PositionProps,
} from 'styled-system';
import { shouldForwardProp } from '../../utils/shouldForwardProp';

import {
  fullWidth, fullHeight, gridPosition, paint,
  FullWidthProps, FullHeightProps, GridPositionProps, PaintProps,
} from '../../utils';

const vectorSystem = compose(space, layout, borderRadius, background, position, fullWidth, fullHeight, gridPosition, paint);

export interface IVectorProps {
}
export type VectorProps =
  IVectorProps
  & SpaceProps
  & LayoutProps
  & BorderRadiusProps
  & BackgroundProps
  & PositionProps
  & FullWidthProps
  & FullHeightProps
  & GridPositionProps
  & PaintProps;

export const StyledVector = styled('svg', { shouldForwardProp })<VectorProps>(
  vectorSystem,
);

export const Vector = ({ ...props }) => (
  <StyledVector
    xmlns="http://www.w3.org/2000/svg"
    {...props} />
);

Vector.displayName = 'Vector';

const defaultProps: any = {
  fill: 'foreground',
  stroke: 'none',
};
Vector.defaultProps = defaultProps;