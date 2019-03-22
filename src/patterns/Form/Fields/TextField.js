import React from 'react';
import { TextInput } from '@phobon/base';

import asField from './asField';

const TextField = (props) => (
  <TextInput {...props} />
);

export default asField(TextInput);