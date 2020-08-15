import React from 'react';

import { Box, Text } from '@phobon/base';

import PercentageBar from './PercentageBar';

export default {
  component: PercentageBar,
  title: 'Components/PercentageBar',
};

export const withDifferentPercentages = () => (
  <Box flexDirection="column" fullWidth>
    <PercentageBar total={100} complete={20} showPercentage mb={3} />
    <PercentageBar total={100} complete={40} showPercentage mb={3} />
    <PercentageBar total={100} complete={70} showPercentage />
  </Box>
);

export const withDifferentSizes = () => (
  <Box flexDirection="column" fullWidth>
    <PercentageBar total={100} complete={20} showPercentage mb={3} size="s" />
    <PercentageBar total={100} complete={20} showPercentage mb={3} size="m" />
    <PercentageBar total={100} complete={20} showPercentage size="l" />
  </Box>
);

export const withDifferentHeadings = () => (
  <Box flexDirection="column" fullWidth>
    <PercentageBar
      total={100}
      complete={20}
      showPercentage
      heading={(
        <Box>
          <Text as="span" fontWeight="bold">20 / 100</Text>
          <Text as="span" ml={1}>remaining</Text>
        </Box>
      )} />
  </Box>
);