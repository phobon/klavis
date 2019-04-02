import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text, Box, Truncate } from '@phobon/base';

import Flag from './Flag';

const severities = ['info', 'success', 'warning', 'error'];

storiesOf('Patterns/Notifications/Flag', module)
  .add('With and without headings', () => (
    <Box flexDirection="column" alignItems="flex-start">
      {severities.map(s => (
        <React.Fragment>
          <Flag mb={5} severity={s} key={s} heading="With heading">
            <Truncate fontWeight="bold" fontSize={2} mb={2} color="grayscale.1">Flag Heading</Truncate>
            <Text color="grayscale.2">{Math.random()}</Text>
          </Flag>
          <Flag mb={8} severity={s} key={s}>
            <Truncate fontWeight="bold" fontSize={2} mb={2} color="grayscale.1">Flag Heading</Truncate>
            <Text color="grayscale.2">{Math.random()}</Text>
          </Flag>
        </React.Fragment>
      ))}
    </Box>
  ))
  .add('With different severities', () => (
    <Box flexDirection="column" alignItems="flex-start">    
      {severities.map(s => (
        <Flag mb={5} severity={s} key={s}>
          <Text color="grayscale.2">{Math.random()}</Text>
        </Flag>
      ))}
    </Box>
  ));