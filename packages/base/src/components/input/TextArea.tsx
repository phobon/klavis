import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import {
  height,
  HeightProps,
} from 'styled-system';

import { Input, InputProps } from './Input';

export type TextAreaProps = InputProps & HeightProps & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: StyledComponent<any, DefaultTheme, TextAreaProps, never> = styled(Input).attrs(() => ({ as: 'textarea' }))<TextAreaProps>(
  height,
);

TextArea.displayName = 'TextArea';

const defaultProps: any = {
  height: 'auto',
  py: 2,
};
TextArea.defaultProps = defaultProps;
