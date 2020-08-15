import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  fontSize as styledFontSize,
  width,
  ColorProps,
  SpaceProps,
  BorderProps,
  FontSizeProps,
  WidthProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  density,
  fullWidth,
  fullHeight,
  cover,
  DensityProps,
  FullWidthProps,
  FullHeightProps,
  CoverProps,
} from '../../utils';

const textInputSystem = compose(color, space, border, styledFontSize, width, fullWidth, fullHeight, cover, density);

const browserChrome = ({ hideBrowserChrome }: IInputProps) => hideBrowserChrome && ({
  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': { 
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '-moz-appearance': 'textfield',
});

export interface IInputProps {
  variant?: 'text' | 'number' | 'password';
  invalid?: boolean;
  disabled?: boolean;
  hideBrowserChrome?: boolean;
}
export type InputProps =
  IInputProps
  & ColorProps
  & SpaceProps
  & BorderProps
  & FontSizeProps
  & WidthProps
  & DensityProps
  & FullWidthProps
  & FullHeightProps
  & CoverProps;

export const Input: StyledComponent<'input', DefaultTheme, InputProps, never> = styled('input').withConfig({ shouldForwardProp }).attrs((props: InputProps) => ({
  'aria-invalid': props.invalid ? true : undefined,
  type: props.variant === 'text' ? undefined : props.variant,
}))<InputProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ theme, fontSize }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    padding: theme.space[2],
    lineHeight: `${theme.fontSizes[fontSize as number]}px`,
    transition: 'border-color 90ms ease-out',
    '&::-webkit-input-placeholder': {
      color: theme.colors.grayscale[5],
    },  
    '&:focus': {
      outline: 0,
      borderColor: theme.colors.guidance.focus,
    },
    '&:disabled': {
      opacity: 0.2,
      pointerEvents: 'none',
      backgroundColor: theme.colors.grayscale[7],
      borderColor: theme.colors.grayscale[6],
    },
    '&[aria-invalid="true"]': {
      borderColor: theme.colors.reds[5],
      '&:hover': {
        borderColor: theme.colors.reds[7],
      },
    },
  }),
  textInputSystem,
  browserChrome,
);

Input.displayName = 'Input';

const defaultProps: any = {
  variant: 'text',
  disabled: false,
  invalid: false,
  fullWidth: false,
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: 'grayscale.9',
  border: '2px solid',
  color: 'foreground',
  borderColor: 'grayscale.7',
  density: 'normal',
  hideBrowserChrome: false,
};
Input.defaultProps = defaultProps;