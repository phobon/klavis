import { createContext } from 'react';

const FormFieldContext = createContext({
  density: 'normal',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  optionalLabel: () => 'optional',
});

export default FormFieldContext;
