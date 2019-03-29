import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Flex, Radio, Heading } from '@phobon/base';

import Form from './Form';
import { TextField, TextAreaField, CheckboxField } from './Fields';

import FieldSet from './FieldSet';
import FieldGroup from './FieldGroup';

const options = [
  { id: 'option1', name: 'option 1' },
  { id: 'option2', name: 'option 2' },
  { id: 'option3', name: 'option 3' },
  { id: 'option4', name: 'option 4' },
  { id: 'option5', name: 'option 5' },
];

storiesOf('Patterns/Form', module)
  .add('With several different fields', () => (
    <Form>
      <TextField id="text1" label="text field 1" />
      <TextField id="text2" label="text field 2" />
      <TextField id="text3" label="text field 3" />
      <TextAreaField id="textarea" label="text area" />
      <CheckboxField id="checkbox" label="checkbox field" />
    </Form>
  ))
  .add('With different densities', () => (
    <React.Fragment>
      <Form density="compact" mr={4} width={1/4}>
        <Heading.H4>Compact density</Heading.H4>
        <TextField id="text1" label="text field 1" />
        <TextField id="text2" label="text field 2" />
        <TextField id="text3" label="text field 3" />
        <TextAreaField id="textarea" label="text area" />
        <CheckboxField id="checkbox" label="checkbox field" />
      </Form>

      <Form density="normal" mr={4} width={1/4}>
        <Heading.H4>Normal density</Heading.H4>
        <TextField id="text1" label="text field 1" />
        <TextField id="text2" label="text field 2" />
        <TextField id="text3" label="text field 3" />
        <TextAreaField id="textarea" label="text area" />
        <CheckboxField id="checkbox" label="checkbox field" />
      </Form>

      <Form density="spacious" width={1/4}>
        <Heading.H4>Spacious density</Heading.H4>
        <TextField id="text1" label="text field 1" />
        <TextField id="text2" label="text field 2" />
        <TextField id="text3" label="text field 3" />
        <TextAreaField id="textarea" label="text area" />
        <CheckboxField id="checkbox" label="checkbox field" />
      </Form>
    </React.Fragment>
  ))
  .add('With inline fields', () => (
    <Form>
      <FieldGroup>
        <TextField id="text1" label="text field" />
      </FieldGroup>

      <FieldGroup>
        <CheckboxField id="checkbox" label="checkbox field" />
        <TextField id="text2" label="text field" />
      </FieldGroup>

      <FieldSet id="fieldset" label="fieldset">
        <Radio label="radio field 1" id="radio_1" />
        <Radio label="radio field 2" id="radio_2" />
      </FieldSet>

      <FieldGroup>
        <TextField id="text3" label="text field" />
        <TextField id="text4" label="text field" />
        <TextField id="text5" label="text field" />
      </FieldGroup>
    </Form>
  ));
