import React from 'react';

import { Stack } from '../containers';
import { Select } from './Select';

export default {
  component: Select,
  title: 'Input/Select',
};

const TestSelect = (props: any) => (
  <Select {...props}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const withDifferentWidths = () => (
  <Stack width={1 / 2} space={3} flexDirection="column" alignItems="flex-start">
    <TestSelect value={null} />
    <TestSelect value={null} fullWidth />
    <TestSelect value={null} width={1 / 2} />
    <TestSelect value={null} width={400} />
  </Stack>
);

export const withDifferentStates = () => (
  <Stack width={1 / 2} space={3} flexDirection="column" alignItems="flex-start">
    <TestSelect value={null} invalid />
    <TestSelect value={null} fullWidth disabled />
  </Stack>
);
