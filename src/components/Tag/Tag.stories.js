import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';
import Tag from './Tag';

storiesOf('Components/Tag', module)
  .add('With varying text lengths', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Tag mb={2}>Tag</Tag>
      <Tag mb={2}>Bigger Tag</Tag>
      <Tag>This is a long tag with long text and should truncate when it is too long</Tag>
    </Box>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" alignItems="flex-start">
      <Tag bg="oranges.3" color="white" mb={2}>Theme colours Tag</Tag>
      <Tag bg="accent.3" color="white" mb={2}>Accent Tag</Tag>
      <Tag bg="tomato" color="white" mb={2}>Tomato Tag</Tag>
      <Tag bg="yellow" mb={2}>Yellow Tag</Tag>
      <Tag bg="Purple" color="white">Purple Tag</Tag>
    </Box>
  ));
