import React from 'react';

import { Stack } from '../containers';
import { TextArea } from './TextArea';

export default {
  component: TextArea,
  title: 'Input/TextArea',
};

export const withDifferentHeights = () => (
  <Stack space={3} alignItems="flex-start">
    <TextArea width={100} mr={3} placeholder="default height" />
    <TextArea width={100} height={300} placeholder="height: 300" />
  </Stack>
);

export const withDifferentStates = () => (
  <Stack space={3} width={1 / 2}  alignItems="flex-start">
    <TextArea mb={3} placeholder="invalid" invalid />
    <TextArea mb={3} fullWidth placeholder="disabled" disabled />
  </Stack>
);