import { Input, InputProps } from '@phobon/base';
import { asField } from './asField';

export const InputField = asField<InputProps, React.InputHTMLAttributes<HTMLInputElement>>(Input);