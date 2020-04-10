import React from 'react';
import { action } from '@storybook/addon-actions';

import { Stack, BoxList, BoxListItem } from '@phobon/base';

import Avatar from './Avatar';

export default {
  component: Avatar,
  title: 'Components/Avatar',
};

const sizes = ['s', 'm', 'l'];
const statuses = ['none', 'error', 'warning', 'success'];
const presences = ['none', 'unknown', 'unavailable', 'busy', 'available'];

export const withVariants = () => (
  <Stack space={3} flexDirection="row">
    <Avatar name="Fake Name" />
    <Avatar name="Fake Name" variant="glyph" />
    <Avatar name="Fake Name" image="https://source.unsplash.com/random/50x50" />
  </Stack>
);

export const withDifferentColours = () => (
  <Stack space={3} flexDirection="row">
    <Avatar name="Fake Name" variant="glyph" bg="violets.6" color="white" />
    <Avatar name="Fake Name" variant="glyph" bg="cyans.6" color="cyans.2" />
    <Avatar name="Fake Name" variant="glyph" bg="oranges.6" color="white" />
  </Stack>
);

export const withDifferentStatuses = () => {
  const glyphAvatars = Object.values(statuses).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" variant="glyph" status={s} />
    </BoxListItem>
  ));

  const initialsAvatars = Object.values(statuses).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" status={s} />
    </BoxListItem>
  ));

  const imageAvatars = Object.values(statuses).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" status={s} image="https://source.unsplash.com/random/50x50" />
    </BoxListItem>
  ));

  return (
    <Stack space={5}>
      <BoxList space={3} flexDirection="row">
        {glyphAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {initialsAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {imageAvatars}
      </BoxList>
    </Stack>
  );
};

export const withDifferentPresences = () => {
  const glyphAvatars = Object.values(presences).map(p => (
    <BoxListItem key={p}>
      <Avatar name="Fake Name" variant="glyph" presence={p} />
    </BoxListItem>
  ));

  const initialsAvatars = Object.values(presences).map(p => (
    <BoxListItem key={p}>
      <Avatar name="Fake Name" presence={p} />
    </BoxListItem>
  ));

  const imageAvatars = Object.values(presences).map(p => (
    <BoxListItem key={p}>
      <Avatar name="Fake Name" presence={p} image="https://source.unsplash.com/random/50x50" />
    </BoxListItem>
  ));

  return (
    <Stack space={5}>
      <BoxList space={3} flexDirection="row">
        {glyphAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {initialsAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {imageAvatars}
      </BoxList>
    </Stack>
  );
};

export const withDifferentSizes = () => {
  const glyphAvatars = Object.values(sizes).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" variant="glyph" size={s} />
    </BoxListItem>
  ));

  const initialsAvatars = Object.values(sizes).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" size={s} />
    </BoxListItem>
  ));

  const imageAvatars = Object.values(sizes).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" size={s} image="https://source.unsplash.com/random/50x50" />
    </BoxListItem>
  ));

  const statusPresenceAvatars = Object.values(sizes).map(s => (
    <BoxListItem key={s}>
      <Avatar name="Fake Name" size={s} status="warning" presence="unknown" />
    </BoxListItem>
  ));

  return (
    <Stack space={5}>
      <BoxList space={3} flexDirection="row">
        {glyphAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {initialsAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {imageAvatars}
      </BoxList>
      <BoxList space={3} flexDirection="row">
        {statusPresenceAvatars}
      </BoxList>
    </Stack>
  );
};

export const withCustomOnClick = () => (
  <Avatar name="Fake Name" onClick={action('clicked')} />
); 
