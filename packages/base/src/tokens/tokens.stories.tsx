import React from 'react';

import { fontSizes, space, radii } from './tokens';

import { Box } from '../components/containers/Box';
import { Text } from '../components/typography/Text';

export default {
  title: 'Tokens',
};

export const withDifferentFontSizes = () => (
  <Box alignItems="flex-start" flexDirection="column">
    {fontSizes.map((f, i) => (
      <Text key={f} fontSize={f} color="grayscale.2" mb={2}>{`${i}: ${f}px`}</Text>
    ))}
  </Box>
);

export const withDifferentSpaces = () => (
  <Box alignItems="flex-start" flexDirection="column">
    {space.map((s, i) => (
      <Box key={s} mb={2}>
        <Box bg="oranges.6" width={s} borderRadius={2} height={24} />
        <Box px={1} py="1px" fullHeight bg="grayscale.2" borderRadius={3} ml={2}>
          <Text fontSize={0} color="white">{`${i}: ${s}px`}</Text>
        </Box>
      </Box>
    ))}
  </Box>
);

export const withDifferentRadii = () => (
  <Box alignItems="flex-start" flexDirection="column">
    {radii.map((r, i) => (
      <Box key={r} mb={3} borderRadius={r} width={100} height={100} bg="grayscale.6">
        <Text>{`${i}: ${r}px`}</Text>
      </Box>
    ))}
  </Box>
);