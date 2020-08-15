import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  PositionProps,
  TextStyleProps,
  FlexboxProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { cover, gridPosition, CoverProps, GridPositionProps } from '../../utils';

const labelSystem = compose(space, color, layout, typography, position, textStyle, gridPosition, cover, flexbox);

export interface ILabelProps {
}
export type LabelProps =
  ILabelProps
  & SpaceProps
  & ColorProps
  & LayoutProps
  & TypographyProps
  & PositionProps
  & TextStyleProps
  & CoverProps
  & GridPositionProps
  & FlexboxProps;
export const Label: StyledComponent<'label', DefaultTheme, LabelProps, never> =
  styled('label').withConfig({ shouldForwardProp })<LabelProps>({
    boxSizing: 'border-box',
    display: 'flex',
  },
  labelSystem,
);

Label.displayName = 'Text';

const defaultProps: any = {
  color: 'grayscale.2',
  fontSize: 1,
  justifyContent: 'center',
  alignItems: 'baseline',
  flex: 'none',
};
Label.defaultProps = defaultProps;
