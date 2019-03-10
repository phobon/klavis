import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Text } from '@phobon/base';

import Badge from './Badge';

storiesOf('Components/Badge', module)
  .add('Basic', () => (
    <Badge>1</Badge>
  ))
  .add('With different colours', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <Badge bg="guidance.warning.1" color="guidance.warning.0" mb={2}>1</Badge>
      <Badge bg="guidance.info.1" color="guidance.info.0" mb={2}>2</Badge>
      <Badge bg="guidance.success.1" color="guidance.success.0" mb={2}>3</Badge>
      <Badge bg="guidance.error.1" color="guidance.error.0">4</Badge>
    </Box>
  ))
  .add('With different text length', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <Badge mb={2}>1</Badge>
      <Badge mb={2}>100</Badge>
      <Badge mb={2}>Word</Badge>
      <Badge mb={2}>Lots of words</Badge>
    </Box>
  ))
  .add('Composition', () => {
    const categoryData = [
      { label: 'Inbox', count: 15, bg: 'reds.3' },
      { label: 'Starred', count: 5, bg: 'blues.3' },
      { label: 'Snoozed', count: 3 },
      { label: 'Sent', count: 150, bg: 'grayscale.6', color: 'foreground' },
      { label: 'Drafts', count: 3, bg: 'grayscale.6', color: 'foreground'  },
    ];
    
    const categories = categoryData.map(({ label, count, ...props }) => (
      <Box key={label} py={2} fullWidth justifyContent="space-between">
        <Text width={175}>{label}</Text>
        <Badge {...props}>{count}</Badge>
      </Box>
    ));
    
    return (
      <Box flexDirection="column" alignItems="flex-start">
        {categories}
      </Box>
    );
  });