import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '@phobon/base';

import asField from './asField';

import Form from '../Form';
import TextField from './TextField';

storiesOf('Patterns/Form/asField', module)
  .add('Higher order component', () => {
    const TestField = asField(TextInput);
    return (
      <Form>
        <TestField id="test" label="test label" />
      </Form>
    );
  })
  .add('Composable component', () => (
    <Form>
      <TextField id="test" label="test label" />
    </Form>
  ));
