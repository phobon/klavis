import styled from 'styled-components';
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
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { cover, fullWidth, fullHeight, gridPosition, CoverProps, FullWidthProps, FullHeightProps, GridPositionProps } from '../../utils';

const textSystem = compose(space, color, layout, typography, position, textStyle, gridPosition, cover, fullWidth, fullHeight);

export interface ITextProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}
export type TextProps =
  ITextProps
  & SpaceProps
  & ColorProps
  & LayoutProps
  & TypographyProps
  & PositionProps
  & TextStyleProps
  & CoverProps
  & FullWidthProps
  & FullHeightProps
  & GridPositionProps;
export const Text = styled('span').withConfig({ shouldForwardProp })<TextProps>({
  boxSizing: 'border-box',
  display: 'block',
},
  textSystem,
);

Text.displayName = 'Text';

const defaultProps: any = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};
Text.defaultProps = defaultProps;
