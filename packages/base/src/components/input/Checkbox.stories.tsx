import React from 'react';

import { Box } from '../containers';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Input/Checkbox',
};

export const withDifferentSizes = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Checkbox label="default (3)" id="1" mb={3} />
    <Checkbox label="4" size={4} id="2" mb={3} />
    <Checkbox label="5" size={5} id="3" mb={3} />
    <Checkbox label="6" size={6} id="4" mb={3} />
    <Checkbox label="7" size={7} id="5" />
  </Box>
);

export const withDifferentColor = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Checkbox label="default" id="1" mb={3} />
    <Checkbox label="oranges.5" color="oranges.5" id="2" mb={3} />
    <Checkbox label="blues.5" color="blues.5" id="3" mb={3} />
    <Checkbox label="purple" color="purple" id="4" mb={3} />
    <Checkbox label="teal" color="teal" id="5" />
  </Box>
);

export const withDifferentStates = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Checkbox label="invalid" id="1" mb={3} invalid />
    <Checkbox label="disabled" id="2" disabled />
  </Box>
);