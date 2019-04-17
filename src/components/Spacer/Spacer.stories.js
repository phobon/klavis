import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';

import Spacer from './Spacer';

storiesOf('Components/Spacer', module)
  .add('With different lengths', () => (
    <Box fullWidth height={100}>
      <Spacer mr={5} />
      <Spacer mr={5} length="50%" />
      <Spacer length="100%" />
    </Box>
  ))
  .add('With different thicknesses', () => (
    <Box fullWidth height={100}>
      <Spacer mr={5} />
      <Spacer mr={5} thickness="1px" />
      <Spacer thickness="4px" />
    </Box>
  ))
  .add('With different background colours', () => (
    <Box fullWidth height={100}>
      <Spacer mr={5} bg="grayscale.3" />
      <Spacer mr={5} bg="grayscale.7" />
      <Spacer bg="oranges.4" />
    </Box>
  ))
  .add('With different directions', () => (
    <React.Fragment>
      <Box height={100} mr={7}>
        <Spacer mb={3} />
      </Box>
      <Box width={100}>
        <Spacer direction="horizontal" />
      </Box>
    </React.Fragment>
  ));