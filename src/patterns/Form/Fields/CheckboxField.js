import React from 'react';
import { Checkbox } from '@phobon/base';

import asField from './asField';

const CheckboxField = (props) => (
  <Checkbox {...props} />
);

export default asField(Checkbox);