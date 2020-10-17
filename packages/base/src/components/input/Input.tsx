import React from "react";
import styled from "@emotion/styled";

import { shouldForwardProp } from "../../utils/shouldForwardProp";

import {
  defaultProps,
  IInputProps,
  InputProps,
  inputStyles,
  inputSystem,
} from "./inputProps";

const browserChrome = ({ hideBrowserChrome }: IInputProps) =>
  hideBrowserChrome && {
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "-moz-appearance": "textfield",
  };

const StyledInput = styled("input", { shouldForwardProp })<InputProps & any>(
  inputStyles,
  inputSystem,
  browserChrome
);

export type DetailedInputProps =
  InputProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  { as?: React.ElementType<any> };

export const Input: React.FunctionComponent<DetailedInputProps> = React.forwardRef<HTMLInputElement, DetailedInputProps>(
  ({ invalid, variant, ...props }: InputProps, ref) => (
    <StyledInput
      aria-invalid={invalid ? true : undefined}
      type={variant === "text" ? undefined : variant}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";

Input.defaultProps = {
  variant: "text",
  disabled: false,
  invalid: false,
  fullWidth: false,
  hideBrowserChrome: false,
  ...defaultProps,
};
