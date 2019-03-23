import React from 'react';
import { Select } from '@phobon/base';

import asField from './asField';

const SelectField = ({ children, ...props }) => (
  <Select {...props}>
    {children}
  </Select>
);

export default asField(SelectField);