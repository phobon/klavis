import React from 'react';

import { Box } from '../containers';
import { Link } from './Link';

export default {
  component: Link,
  title: 'Link',
};

export const withDifferentStates = () => (
  <>
    <Link href="#" mr={3}>Normal link</Link>
    <Link href="#" clean>Clean link</Link>
  </>
);

export const withDifferentColours = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Link href="#" color="tomato" mb={3}>String colour: tomato</Link>
    <Link href="#" color="accent.4" mb={3}>Theme colour: accent.4</Link>
    <Link href="#" color="grayscale.1" mb={3}>Theme colour: grayscale.1</Link>
    <Link href="#" color="purples.2">Theme colour: purples.2</Link>
  </Box>
);

export const withDifferentTextStyles = () => (
  <Box flexDirection="column" alignItems="flex-start">
    <Link href="#" textStyle="caps">caps</Link>
    <Link href="#" textStyle="monospace" mt={3}>monospace</Link>
  </Box>
);
