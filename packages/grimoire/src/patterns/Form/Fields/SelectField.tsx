import { Select, SelectProps } from '@phobon/base';
import { asField } from './asField';

export const SelectField = asField<SelectProps, React.InputHTMLAttributes<HTMLSelectElement>>(Select);