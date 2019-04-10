import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';

import withBadge from './withBadge';

const BadgeBox = withBadge(Box);

storiesOf('Components/Badge/withBadge', module)
  .add('With different positioning', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="1" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgePosition="bottomleft" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgePosition="bottomright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ))
  .add('With different colours', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="1" badgeBg="guidance.success.1" badgeColor="guidance.success.0" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgeBg="guidance.info.1" badgeColor="guidance.info.0" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgeBg="guidance.warning.1" badgeColor="guidance.warning.0" badgePosition="bottomleft" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgeBg="guidance.error.1" badgeColor="guidance.error.0" badgePosition="bottomright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ))
  .add('With different text length', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="50" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="555" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Text" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Lots of text" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ));