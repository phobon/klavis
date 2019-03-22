import React from 'react';
import { TextArea } from '@phobon/base';

import asField from './asField';

const TextAreaField = (props) => (
  <TextArea {...props} />
);

export default asField(TextArea);