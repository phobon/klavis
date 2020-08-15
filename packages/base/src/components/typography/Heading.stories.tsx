import React from 'react';

import { Box, Stack } from '../containers';

import { Heading } from './Heading';

export default {
  component: Heading,
  title: 'Typography/Heading',
};

export const withWhitespaceRemoved = () => (
  <Stack alignItems="flex-start" fullWidth bg="purples.7">
    <Heading>Hello world</Heading>
    <Heading>Hello world</Heading>
    <Heading>Hello world</Heading>
    <Heading>Hello world</Heading>
    <Heading>Hello world</Heading>
  </Stack>
);

export const withDifferentHeadingSizes = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Heading as="h1" mb={2}>Heading as="h1"</Heading>
    <Heading as="h2" mb={2}>Heading as="h2"</Heading>
    <Heading mb={2}>Heading</Heading>
    <Heading as="h4" mb={2}>Heading as="h4"</Heading>
    <Heading as="h5" mb={2}>Heading as="h5"</Heading>
    <Heading as="h6">Heading as="h6"</Heading>
  </Box>
);

export const withDifferentTextStyles = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Heading as="h1" mb={2} textStyle="monospace">Heading as="h1"</Heading>
    <Heading as="h2" mb={2} textStyle="monospace">Heading as="h2"</Heading>
    <Heading mb={2} textStyle="monospace">Heading</Heading>
    <Heading as="h4" mb={2} textStyle="monospace">Heading as="h4"</Heading>
    <Heading as="h5" mb={2} textStyle="monospace">Heading as="h5"</Heading>
    <Heading as="h6" textStyle="monospace" mb={6}>Heading as="h6"</Heading>

    <Heading as="h1" mb={2} textStyle="caps">Heading as="h1"</Heading>
    <Heading as="h2" mb={2} textStyle="caps">Heading as="h2"</Heading>
    <Heading mb={2} textStyle="caps">Heading</Heading>
    <Heading as="h4" mb={2} textStyle="caps">Heading as="h4"</Heading>
    <Heading as="h5" mb={2} textStyle="caps">Heading as="h5"</Heading>
    <Heading as="h6" textStyle="caps">Heading as="h6"</Heading>
  </Box>
);

export const withDifferentTextComponentProps = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Heading mb={3} color="tomato">color: tomato</Heading>
    <Heading mb={3} color="purples.3">theme color: purples.3</Heading>
    <Heading fontWeight="bold">fontWeight: bold</Heading>
  </Box>
);