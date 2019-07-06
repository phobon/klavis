import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack, Box } from '@phobon/base';

import withBadge from './withBadge';

const BadgeBox = withBadge(Box);

storiesOf('Components/Badge/withBadge', module)
  .add('With different positioning', () => (
    <Stack space={4} fullWidth fullHeight alignItems="flex-start">
      <BadgeBox badge="1" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgePosition="bottomleft" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgePosition="bottomright" width={48} height={48} bg="grayscale.7" />
    </Stack>
  ))
  .add('With different colours', () => (
    <Stack space={4} fullWidth fullHeight alignItems="flex-start">
      <BadgeBox badge="1" badgeBg="guidance.success.1" badgeColor="guidance.success.0" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgeBg="guidance.info.1" badgeColor="guidance.info.0" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgeBg="guidance.warning.1" badgeColor="guidance.warning.0" badgePosition="bottomleft" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgeBg="guidance.error.1" badgeColor="guidance.error.0" badgePosition="bottomright" width={48} height={48} bg="grayscale.7" />
    </Stack>
  ))
  .add('With different text length', () => (
    <Stack space={4} fullWidth fullHeight alignItems="flex-start">
      <BadgeBox badge="50" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="555" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Text" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Lots of text" badgePosition="topright" width={48} height={48} bg="grayscale.7" />
    </Stack>
  ));