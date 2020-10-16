import { Select, SelectProps } from '@phobon/base';
import { asField, IAsFieldProps } from './asField';

type SelectFieldProps =
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
  & SelectProps
  & IAsFieldProps;

export const SelectField = asField<HTMLSelectElement, SelectFieldProps>(Select);