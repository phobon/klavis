import React from 'react';

import { Box } from './Box';
import { Card, BoxShadowSize } from './Card';

const boxShadowSizes: (BoxShadowSize)[] = ['s', 'm', 'l', 'xl'];
const boxShadowIntensities = [0, 0.25, 0.5, 0.75, 1];

export default {
  component: Card,
  title: 'Containers/Card',
};

export const withAndWithoutContent = () => (
  <>
    <Card width={150} height={50} mr={5} />
    <Card p={4}>Some content</Card>
  </>
);

export const withDifferentBoxShadowSizes = () => (
  <Box flexDirection="column" alignItems="flex-start">
    {boxShadowSizes.map(b => (
      <Card key={b} p={4} boxShadowSize={b} mb={5} width={150}>{b}</Card>
    ))}
  </Box>
);

export const withDifferentBoxShadowIntensities = () => (
  <Box flexDirection="column" alignItems="flex-start">
    {boxShadowIntensities.map(b => (
      <Card key={b} p={4} boxShadowIntensity={b} mb={5} width={150}>{b}</Card>
    ))}
  </Box>
);