import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Text } from '@phobon/base';

import PercentageBar from './PercentageBar';

storiesOf('Components/PercentageBar', module)
  .add('With different percentages', () => (
    <Box flexDirection="column" fullWidth>
      <PercentageBar total={100} complete={20} showPercentage mb={3} />
      <PercentageBar total={100} complete={40} showPercentage mb={3} />
      <PercentageBar total={100} complete={70} showPercentage />
    </Box>
  ))
  .add('With different sizes', () => (
    <Box flexDirection="column" fullWidth>
      <PercentageBar total={100} complete={20} showPercentage mb={3} size="s" />
      <PercentageBar total={100} complete={20} showPercentage mb={3} size="m" />
      <PercentageBar total={100} complete={20} showPercentage size="l" />
    </Box>
  ))
  .add('With different headings', () => (
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
  ));