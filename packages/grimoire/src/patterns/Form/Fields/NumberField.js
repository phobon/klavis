import React, { forwardRef } from 'react';
import { NumberInput } from '@phobon/base';

import asField from './asField';

const NumberField = forwardRef((props, ref) => (
  <NumberInput ref={ref} {...props} />
));

export default asField(NumberField);