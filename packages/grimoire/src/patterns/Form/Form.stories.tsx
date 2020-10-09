import React from 'react';

import { Radio, Heading } from '@phobon/base';

import { Form } from './Form';
import { InputField, TextAreaField, CheckboxField } from './Fields';

import { FieldSet } from './FieldSet';
import { FieldGroup } from './FieldGroup';

export default {
  title: 'Patterns/Form',
};

export const withSeveralDifferentFields = () => (
  <Form>
    <InputField id="text1" label="text field 1" />
    <InputField id="text2" label="text field 2" />
    <InputField id="text3" label="text field 3" />
    <TextAreaField id="textarea" label="text area" />
    <CheckboxField id="checkbox" label="checkbox field" />
  </Form>
);

export const withDifferentDensities = () => (
  <>
    <Form density="compact" mr={4} width={1/4}>
      <Heading.H4>Compact density</Heading.H4>
      <InputField id="text1" label="text field 1" />
      <InputField id="text2" label="text field 2" />
      <InputField id="text3" label="text field 3" />
      <TextAreaField id="textarea" label="text area" />
      <CheckboxField id="checkbox" label="checkbox field" />
    </Form>

    <Form density="normal" mr={4} width={1/4}>
      <Heading.H4>Normal density</Heading.H4>
      <InputField id="text1" label="text field 1" />
      <InputField id="text2" label="text field 2" />
      <InputField id="text3" label="text field 3" />
      <TextAreaField id="textarea" label="text area" />
      <CheckboxField id="checkbox" label="checkbox field" />
    </Form>

    <Form density="spacious" width={1/4}>
      <Heading.H4>Spacious density</Heading.H4>
      <InputField id="text1" label="text field 1" />
      <InputField id="text2" label="text field 2" />
      <InputField id="text3" label="text field 3" />
      <TextAreaField id="textarea" label="text area" />
      <CheckboxField id="checkbox" label="checkbox field" />
    </Form>
  </>
);

export const withInlineFields = () => (
  <Form>
    <FieldGroup>
      <InputField id="text1" label="text field" />
    </FieldGroup>

    <FieldGroup>
      <CheckboxField id="checkbox" label="checkbox field" />
      <InputField id="text2" label="text field" />
    </FieldGroup>

    <FieldSet id="fieldset" label="fieldset">
      <Radio label="radio field 1" id="radio_1" />
      <Radio label="radio field 2" id="radio_2" />
    </FieldSet>

    <FieldGroup>
      <InputField id="text3" label="text field" />
      <InputField id="text4" label="text field" />
    </FieldGroup>
  </Form>
);
