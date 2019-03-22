import React from 'react';
import { NumberInput } from '@phobon/base';

import asField from './asField';

const NumberField = (props) => (
  <NumberInput {...props} />
);

export default asField(NumberField);