/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Stack } from './Stack';
import { Text } from '../typography';

export default {
  component: Stack,
  title: 'Containers/Stack',
};

export const withDifferentVerticalSpacings = () => (
  <>
    <Stack bg="grayscale.7">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack bg="grayscale.7" space={6} mx={5}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack bg="grayscale.7" space="25px">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
  </>
);

export const withDifferentHorizontalSpacings = () => (
  <Stack>
    <Stack flexDirection="row" bg="grayscale.7">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack flexDirection="row" bg="grayscale.7" space={6}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
    <Stack flexDirection="row" bg="grayscale.7" space="25px">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Stack>
  </Stack>
);

export const withResponsiveSpace = () => (
  <Stack space={[8, 4]} bg="grayscale.7">
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </Stack>
);