/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  SpaceProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';
import themeGet from '@styled-system/theme-get';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { Label } from './Label';

const checkboxSystem = compose(space);

export interface ICheckboxProps {
  id?: string;
  label?: React.ReactNode;
  labelColor?: string;
  size?: number;
  invalid?: boolean;
  borderThickness?: number;
  'aria-invalid'?: string;
}
type CheckboxContainerProps =
  ICheckboxProps
  & SpaceProps
  & BorderProps
  & TypographyProps;
const CheckboxContainer = styled('div').withConfig({ shouldForwardProp }).attrs((props: CheckboxProps) => ({
  'aria-invalid': props.invalid ? true : undefined,
}))<CheckboxProps>(
  checkboxSystem,
  (props: any) => {
    const { theme, size, borderThickness = 2, borderStyle, color, borderColor } = props;
    return {
      display: 'flex',
      flex: 'none',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: 'relative',
      height: theme.space[size] + (borderThickness * 2),
      minWidth: theme.space[size] + (borderThickness * 2),
      label: {
        height: '100%',
        '&::before': {
          content: '""',
          opacity: 0.7,
          transition: '80ms opacity ease-out',
          position: 'absolute',
          left: 0,
          top: 0,
          width: theme.space[size],
          height: theme.space[size],
          border: `${borderThickness}px ${borderStyle} ${themeGet(`colors.${borderColor}`)(props)}`,
          backgroundColor: theme.colors.grayscale[9],
          'box-sizing': 'content-box',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          opacity: 0,
          left: 0,
          top: 0,
          width: theme.space[size] + (borderThickness * 2),
          height: theme.space[size] + (borderThickness * 2),
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' preserveAspectRatio='xMinYMid' stroke-width='2' stroke='white' fill='none' stroke-miterlimit='10' stroke-dashoffset='0' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9.5L5.5 12L13 4.5'/%3E%3C/svg%3E")`,          
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          transition: '80ms opacity ease-out',
          pointerEvents: 'none',
          boxSizing: 'content-box',
        },
      },
      'input[type="checkbox"]': {
        margin: 0,
        opacity: 0,
        'label::after': {
          content: 'none',
        },
        '&:checked + label::after': {
          opacity: 1,
        },
        '&:checked + label::before': {
          opacity: 0.9,
          border: `${borderThickness}px ${borderStyle} ${themeGet(`colors.${color}`)(props)}`,
          backgroundColor: themeGet(`colors.${color}`)(props) || props.color,
        },
        '&:focus + label::before': {
          outline: 0,
          opacity: 1,
          border: `${borderThickness}px ${borderStyle} ${theme.colors.guidance.focus}`,
        },
        '&:disabled + label::before': {
          opacity: 0.5,
          pointerEvents: 'none',
          backgroundColor: theme.colors.grayscale[6],
          border: `${borderThickness}px ${borderStyle} ${theme.colors.grayscale[5]}`,
        },
      },
      '&:hover': {
        label: {
          '&::before': {
            opacity: 1,
          },
        },
      },
      '&[aria-invalid="true"]': {
        label: {
          '&::before': {
            border: `2px solid ${theme.colors.reds[3]}`,
            backgroundColor: theme.colors.guidance.error[1],
          },
        },
        'input[type="checkbox"]': {
          '&:checked + label::before': {
            border: `2px solid ${theme.colors.reds[3]}`,
            backgroundColor: theme.colors.guidance.error[1],
          },
        },
      },
    };
  },
);

export type CheckboxProps = CheckboxContainerProps & React.InputHTMLAttributes<HTMLInputElement>;
export const Checkbox = forwardRef(({
  id,
  label,
  labelColor,
  onChange,
  disabled,
  checked,
  required,
  fontSize,
  fontWeight,
  name,
  size,
  invalid,
  className,
  ...props
}: CheckboxProps, ref: any) => (
  <CheckboxContainer {...props} size={size} disabled={disabled} invalid={invalid} className={className}>
    <input
      ref={ref}
      type="checkbox"
      id={id}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={className}
      checked={checked}
      name={name} />
    <Label
      alignItems="center"
      color={labelColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      htmlFor={id}
      ml={label ? size : 0}>
      {label}
    </Label>
  </CheckboxContainer>
));

Checkbox.displayName = 'Checkbox';

const defaultProps: any = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderRadius: 3,
  borderThickness: 2,
  borderStyle: 'solid',
  borderColor: 'grayscale.7',
  size: 3,
  invalid: false,
};
Checkbox.defaultProps = defaultProps;