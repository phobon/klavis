import React from 'react';

import { Stack } from '../containers';

import { Truncate } from './Truncate';

export default {
  component: Truncate,
  title: 'Typography/Truncate',
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Nulla condimentum in turpis nec posuere. Cras ac mollis ligula, vitae volutpat risus.';

export const withWidthConstraints = () => (
  <Stack fullWidth alignItems="flex-start" space={4}>
    <Truncate p={0} width={350} color="grayscale.2">
      {text}
    </Truncate>

    <Truncate p={0} width={350} color="grayscale.2" textStyle="monospace">
      {text}
    </Truncate>

    <Truncate p={0} width={350} color="grayscale.2" textStyle="caps">
      {text}
    </Truncate>
  </Stack>
);

export const withoutWidthConstraints = () => (
  <Stack fullWidth alignItems="flex-start" space={4}>
    <Truncate p={0} color="grayscale.2" fullWidth>
      {text}
    </Truncate>

    <Truncate p={0} color="grayscale.2" textStyle="monospace" fullWidth>
      {text}
    </Truncate>

    <Truncate p={0} color="grayscale.2" textStyle="caps" fullWidth>
      {text}
    </Truncate>
  </Stack>
);

export const withDifferentNumbersOfLines = () => (
  <Stack fullWidth alignItems="flex-start" space={4}>
    <Truncate bg="background" p={0} color="grayscale.2" fullWidth>
      {text}
    </Truncate>

    <Truncate bg="background" p={0} color="grayscale.2" textStyle="monospace" fullWidth lines={2}>
      {text}
    </Truncate>

    <Truncate bg="background" p={0} color="grayscale.2" textStyle="caps" fullWidth lines={3}>
      {text}
    </Truncate>
  </Stack>
);

export const withDifferentBackgroundColours = () => (
  <Stack fullWidth alignItems="flex-start" space={4}>
    <Truncate p={0} color="reds.0" fullWidth bg="reds.5">
      {text}
    </Truncate>
  
    <Truncate p={0} color="greens.0" textStyle="monospace" fullWidth lines={2} bg="greens.6">
      {text}
    </Truncate>

    <Truncate p={0} color="oranges.0" textStyle="caps" fullWidth lines={3} bg="oranges.6">
      {text}
    </Truncate>
  </Stack>
);

export const withDifferentAlignments = () => (
  <Stack space={4} fullWidth>
    <Truncate textAlign="left" fullWidth>
      Shorter Text
    </Truncate>
  
    <Truncate textAlign="center" fullWidth>
      Shorter Text
    </Truncate>

    <Truncate textAlign="right" fullWidth>
      Shorter Text
    </Truncate>
  </Stack>
);