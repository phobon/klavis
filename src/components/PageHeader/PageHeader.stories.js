import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';
import { Button } from '../Button';
import Tag from '../Tag';

import PageHeader from './PageHeader';

storiesOf('Components/PageHeader', module)
  .add('Basic example', () => (
    <PageHeader heading="Simple heading" />
  ))
  .add('With tagline', () => (
    <PageHeader heading="Simple heading" tagLine="Tagline" />
  ))
  .add('With an action', () => (
    <PageHeader
      heading="Simple heading"
      tagLine="Tagline"
      actions={
        <Button variant="primary">Primary</Button>
      } />
  ))
  .add('With several actions', () => (
    <PageHeader
      heading="Simple heading"
      tagLine="Tagline"
      actions={(
        <Box>
          <Button mr={2}>Secondary</Button>
          <Button mr={2}>Secondary</Button>
          <Button variant="primary">Primary</Button>
        </Box>
      )} />
  ))
  .add('With children', () => (
    <PageHeader
      heading="Simple heading"
      tagLine="Tagline"
      actions={(
        <Box>
          <Button mr={2}>Secondary</Button>
          <Button mr={2}>Secondary</Button>
          <Button variant="primary">Primary</Button>
        </Box>
      )}>
      <Box>
        <Tag mr={3}>A child tag</Tag>
        <Tag>Another child tag</Tag>
      </Box>
    </PageHeader>
  ));
