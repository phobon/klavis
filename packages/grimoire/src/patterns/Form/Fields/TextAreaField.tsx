import { TextArea, TextAreaProps } from "@phobon/base";
import { asField, IAsFieldProps } from "./asField";

type TextAreaFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  TextAreaProps &
  IAsFieldProps;

export const TextAreaField = asField<HTMLTextAreaElement, TextAreaFieldProps>(
  TextArea
);
