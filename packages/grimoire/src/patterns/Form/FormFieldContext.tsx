import { createContext } from "react";

export interface IFormFieldContextProps {
  density?: "compact" | "normal" | "spacious";
  optionalLabel?: () => {};
  space?: number;
  formDisabled?: boolean;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const FormFieldContext = createContext<IFormFieldContextProps>({
  density: "normal",
  space: 3,
  formDisabled: true,
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  optionalLabel: () => "optional",
});