import React from 'react';
import { Checkbox, Radio } from '@phobon/base';

import Form from '../Form';
import CheckboxField from './CheckboxField';
import NumberField from './NumberField';
import TextAreaField from './TextAreaField';
import TextField from './TextField';
import SelectField from './SelectField';

import FieldSet from '../FieldSet';

export default {
  title: 'Patterns/Form/Fields',
};

const SelectOptions = () => (
  <>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </>
);

export const checkboxField = () => (
  <Form>
    <CheckboxField label="label" id="checkbox_1" />
    <CheckboxField label="label" hint="hint text" id="checkbox_2" />
    <CheckboxField label="label" invalid="invalid text" id="checkbox_3" />
    <CheckboxField label="required field" required id="checkbox_4" />
    <CheckboxField label="checked field" checked id="checkbox_5" />
    <CheckboxField label="disabled field" disabled id="checkbox_6" />
  </Form>
);

export const numberField = () => (
  <Form>
    <NumberField label="label" id="number_1" />
    <NumberField label="label" hint="hint text" id="number_2" />
    <NumberField label="label" invalid="invalid text" id="number_3" />
    <NumberField label="required field" required id="number_4" />
    <NumberField label="disabled field" disabled id="number_5" />
  </Form>
);

export const textAreaField = () => (
  <Form>
    <TextAreaField label="label" id="text_1" />
    <TextAreaField label="label" hint="hint text" id="text_2" />
    <TextAreaField label="label" invalid="invalid text" id="text_3" />
    <TextAreaField label="required field" required id="text_4" />
    <TextAreaField label="disabled field" disabled id="text_5" />
  </Form>
);

export const textField = () => (
  <Form>
    <TextField label="label" id="text_1" />
    <TextField label="label" hint="hint text" id="text_2" />
    <TextField label="label" invalid="invalid text" id="text_3" />
    <TextField label="required field" required id="text_4" />
    <TextField label="disabled field" disabled id="text_5" />
  </Form>
);

export const selectField = () => (
  <Form>
    <SelectField label="label" id="select_1">
      <SelectOptions />
    </SelectField>
    <SelectField label="label" hint="hint text" id="select_2">
      <SelectOptions />
    </SelectField>
    <SelectField label="required field" required id="select_4">
      <SelectOptions />
    </SelectField>
    <SelectField label="disabled field" disabled id="select_5">
      <SelectOptions />
    </SelectField>
  </Form>
);

export const fieldSet = () => (
  <Form>
    <FieldSet id="group1" label="Fieldset1 label" hint="Fieldset1 hint">
      <Checkbox label="checkbox1 label" value="value1" id="checkbox_1" />
      <Checkbox label="checkbox2 label" value="value2" id="checkbox_2" />
      <Checkbox label="checkbox3 label" value="value3" id="checkbox_3" />
    </FieldSet>
    <FieldSet id="group2" label="Fieldset2 label" hint="Fieldset2 hint">
      <Radio label="radio1 label" value="value1" id="radio_1" />
      <Radio label="radio2 label" value="value2" id="radio_2" />
      <Radio label="radio3 label" value="value3" id="radio_3" />
    </FieldSet>
    <FieldSet id="group3" label="Disabled Fieldset" hint="Fieldset2 hint" disabled>
      <Radio label="radio1 label" value="value1" id="radio_4" />
      <Radio label="radio2 label" value="value2" id="radio_5" />
      <Radio label="radio3 label" value="value3" id="radio_6" />
    </FieldSet>
    <FieldSet id="group4" label="Invalid Fieldset" hint="Fieldset2 hint" invalid="Something is wrong">
      <Radio label="radio1 label" value="value1" id="radio_7" />
      <Radio label="radio2 label" value="value2" id="radio_8" />
      <Radio label="radio3 label" value="value3" id="radio_9" />
    </FieldSet>
  </Form>
);
