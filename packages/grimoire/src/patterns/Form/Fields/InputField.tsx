import { Input, InputProps } from '@phobon/base';
import { asField, IAsFieldProps } from './asField';

type InputFieldProps =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  & InputProps
  & IAsFieldProps;

export const InputField = asField<HTMLInputElement, InputFieldProps>(Input);