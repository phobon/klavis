import React from "react";
import styled from "@emotion/styled";
import { compose, height, HeightProps } from "styled-system";

import { Input } from "./Input";

import {
  InputProps,
  inputStyles,
  defaultProps,
  inputSystem,
} from "./inputProps";

export type TextAreaProps = InputProps & HeightProps;

const textAreaSystem = compose(inputSystem, height);

const StyledTextArea = styled(Input)<TextAreaProps>(
  inputStyles,
  textAreaSystem
);

export const TextArea: React.FunctionComponent<TextAreaProps & any> = ({
  ...props
}) => <StyledTextArea as="textarea" {...props} />;

TextArea.displayName = "TextArea";

TextArea.defaultProps = {
  ...defaultProps,
  height: "auto",
  py: 2,
};
