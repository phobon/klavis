import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack } from '@phobon/base';
import { Button } from '../Button';
import Tag from '../Tag';

import PageHeader from './PageHeader';

storiesOf('Components/PageHeader', module)
  .add('With a simple heading', () => (
    <PageHeader heading="Simple heading" />
  ))
  .add('With a tagline', () => (
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
        <Stack flexDirection="row" space={2}>
          <Button>Secondary</Button>
          <Button>Secondary</Button>
          <Button variant="primary">Primary</Button>
        </Stack>
      )} />
  ))
  .add('With children', () => (
    <PageHeader
      heading="Simple heading"
      tagLine="Tagline"
      actions={(
        <Stack flexDirection="row" space={2}>
          <Button>Secondary</Button>
          <Button>Secondary</Button>
          <Button variant="primary">Primary</Button>
        </Stack>
      )}>
      <Stack flexDirection="row" space={3}>
        <Tag>A child tag</Tag>
        <Tag>Another child tag</Tag>
      </Stack>
    </PageHeader>
  ));
