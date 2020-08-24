import React, { forwardRef } from 'react';
import { Input } from '@phobon/base';

import asField from './asField';

const NumberField = forwardRef((props, ref) => (
  <Input variant="number" ref={ref} {...props} />
));

export default asField(NumberField);