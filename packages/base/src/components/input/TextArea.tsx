import React from "react";
import styled from "@emotion/styled";
import { height, HeightProps } from "styled-system";

import { Input, InputProps } from "./Input";

export type TextAreaProps = InputProps &
  HeightProps &
  React.InputHTMLAttributes<HTMLTextAreaElement>;

export const StyledTextArea = styled(Input)<TextAreaProps>(height);

export const TextArea = ({ ...props }) => (
  <StyledTextArea as="textarea" {...props} />
);

TextArea.displayName = "TextArea";

const defaultProps: any = {
  height: "auto",
  py: 2,
};
TextArea.defaultProps = defaultProps;
