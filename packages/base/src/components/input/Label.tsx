import styled from "@emotion/styled";
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
import { shouldForwardProp } from '../../utils/shouldForwardProp';

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

export const Label =
  styled('label', { shouldForwardProp })<LabelProps & React.InputHTMLAttributes<HTMLLabelElement>>({
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
