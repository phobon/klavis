import { createContext } from "react";
import { FlexboxProps } from "styled-system";

export interface IFormFieldContextProps {
  density?: "compact" | "normal" | "spacious";
  optionalLabel?: () => {};
  space?: number;
  formDisabled?: boolean;
}

export type FormFIeldContextProps =
  IFormFieldContextProps &
  FlexboxProps;

export const FormFieldContext = createContext<FormFIeldContextProps>({
  density: "normal",
  space: 3,
  formDisabled: true,
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  optionalLabel: () => "optional",
});