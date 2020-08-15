import React from 'react';

import { Box } from '../containers';
import { Image } from './Image';

export default {
  component: Image,
  title: 'Images/Image',
};

export const withDifferentBoxProps = () => (
  <>
    <Image src="https://source.unsplash.com/random/100x100" mr={3} />
    <Image src="https://source.unsplash.com/random/100x100" mr={3} round />
    <Image src="https://source.unsplash.com/random/100x100" borderRadius={4} />
  </>
);

export const withAndWithoutResponsiveSizing = () => (
  <>
    <Image src="https://source.unsplash.com/random/400x400" mr={3} />
    <Box width={100} height={100}>
      <Image src="https://source.unsplash.com/random/400x400" responsive />
    </Box>
  </>
);
