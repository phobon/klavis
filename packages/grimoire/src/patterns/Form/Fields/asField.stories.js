import React from 'react';
import { Input } from '@phobon/base';

import asField from './asField';

import Form from '../Form';
import TextField from './TextField';

export default {
  component: asField,
  title: 'Patterns/Form/asField',
};

export const higherOrderComponent = () => {
  const TestField = asField(Input);
  return (
    <Form>
      <TestField id="test" label="test label" />
    </Form>
  );
};

export const composableComponent = () => (
  <Form>
    <TextField id="test" label="test label" />
  </Form>
);
