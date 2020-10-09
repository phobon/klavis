import { createContext } from "react";

export const FormFieldContext = createContext({
  density: "normal",
  space: 3,
  formDisabled: true,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  optionalLabel: () => "optional",
});