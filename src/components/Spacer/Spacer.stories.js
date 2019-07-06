import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack, Box } from '@phobon/base';

import Spacer from './Spacer';

storiesOf('Components/Spacer', module)
  .add('With different lengths', () => (
    <Stack fullWidth space={5}>
      <Spacer />
      <Spacer length="50%" />
      <Spacer length="100%" />
    </Stack>
  ))
  .add('With different thicknesses', () => (
    <Stack fullWidth space={5}>
      <Spacer />
      <Spacer thickness="1px" />
      <Spacer thickness="4px" />
    </Stack>
  ))
  .add('With different background colours', () => (
    <Stack fullWidth space={5}>
      <Spacer bg="grayscale.3" />
      <Spacer bg="grayscale.7" />
      <Spacer bg="oranges.4" />
    </Stack>
  ))
  .add('With different directions', () => (
    <Stack fullWidth space={5}>
      <Box width={100} mr={7}>
        <Spacer bg="grayscale.3" />
      </Box>
      <Box height={100}>
        <Spacer direction="vertical" bg="grayscale.3" />
      </Box>
    </Stack>
  ));