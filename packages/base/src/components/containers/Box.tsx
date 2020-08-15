import styled from 'styled-components';
import {
  compose, space, layout, flexbox, border, color, position, background,
  SpaceProps, LayoutProps, FlexboxProps, BorderProps, ColorProps, PositionProps, BackgroundProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  gridPosition,
  cover,
  fullWidth,
  fullHeight,
  round,
  GridPositionProps,
  CoverProps,
  FullWidthProps,
  FullHeightProps,
  RoundProps,
} from '../../utils';

const boxSystem = compose(
  space,
  layout,
  flexbox,
  border,
  color,
  position,
  background,
  round,
  cover,
  fullWidth,
  fullHeight,
  gridPosition,
);

export type BoxProps =
  SpaceProps
  & LayoutProps
  & FlexboxProps
  & BorderProps
  & ColorProps
  & PositionProps
  & BackgroundProps
  & GridPositionProps
  & CoverProps
  & FullWidthProps
  & FullHeightProps
  & RoundProps;

export const Box = styled('div').withConfig({ shouldForwardProp })<BoxProps>({
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,
},
  boxSystem,
);

Box.displayName = 'Box';

const defaultProps: any = {
  flex: 'none',
  color: 'foreground',
  alignItems: 'center',
  justifyContent: 'center',
};
Box.defaultProps = defaultProps;
