import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  borderRadius,
  background,
  position,
  SpaceProps, LayoutProps, BorderRadiusProps, BackgroundProps, PositionProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

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

export const Vector = styled('svg').attrs(() => ({
    xmlns: 'http://www.w3.org/2000/svg',
  })).withConfig({ shouldForwardProp })<VectorProps>(
  vectorSystem,
);

Vector.displayName = 'Vector';

const defaultProps: any = {
  fill: 'foreground',
  stroke: 'none',
};
Vector.defaultProps = defaultProps;