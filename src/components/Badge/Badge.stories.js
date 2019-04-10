import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';

import Badge from './Badge';

storiesOf('Components/Badge', module)
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
      <Badge mb={2}>5</Badge>
      <Badge mb={2}>555</Badge>
      <Badge mb={2}>Text</Badge>
      <Badge mb={2}>Lots of text</Badge>
    </Box>
  ));