import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';

import ProgressBar from './ProgressBar';

storiesOf('Components/ProgressBar', module)
  .add('With different percentages', () => (
    <Box flexDirection="column" fullWidth>
      <ProgressBar total={100} complete={20} showPercentage mb={3} />
      <ProgressBar total={100} complete={40} showPercentage mb={3} />
      <ProgressBar total={100} complete={70} showPercentage />
    </Box>
  ))
  .add('With different sizes', () => (
    <Box flexDirection="column" fullWidth>
      <ProgressBar total={100} complete={20} showPercentage mb={3} size="s" />
      <ProgressBar total={100} complete={20} showPercentage mb={3} size="m" />
      <ProgressBar total={100} complete={20} showPercentage size="l" />
    </Box>
  ));
