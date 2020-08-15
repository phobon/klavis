import React from 'react';

import { Box } from '../containers';

import { Text } from './Text';

export default {
  component: Text,
  title: 'Typography/Text',
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus.';

export const withDifferentTextStyles = () => (
  <Box flexDirection="column" alignItems="flex-start" fullWidth>
    <Text mb={3}>
      {text}
    </Text>
    <Text mb={3} textStyle="monospace">
      {text}
    </Text>
    <Text textStyle="caps">
      {text}
    </Text>
  </Box>
);

export const withDifferentColours = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Text color="tomato" mb={3}>String colour: tomato</Text>
    <Text color="accent.4" mb={3}>Theme colour: accent.4</Text>
    <Text color="grayscale.1" mb={3}>Theme colour: grayscale.1</Text>
    <Text color="purples.2">Theme colour: purples.2</Text>
  </Box>
);

export const withDifferentFontWeights = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Text fontWeight="light" mb={3}>fontWeight: light</Text>
    <Text mb={3}>fontWeight: normal</Text>
    <Text fontWeight="bold">fontWeight: bold</Text>
  </Box>
);
