import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box, BoxList, BoxListItem } from '@phobon/base';
import Avatar from './Avatar';

const sizes = ['s', 'm', 'l'];
const statuses = ['none', 'error', 'warning', 'success'];
const presences = ['none', 'unknown', 'unavailable', 'busy', 'available'];
const nameStyles = ['none', 'first', 'full'];

storiesOf('Components/Avatar', module)
  .add('With avatar styles', () => (
    <Box>
      <Avatar name="Fake Name" mr={3} />
      <Avatar name="Fake Name" avatarStyle="glyph" mr={3} />
      <Avatar name="Fake Name" image="https://source.unsplash.com/random/50x50" />
    </Box>
  ))
  .add('With name styles', () => {
    const glyphAvatars = Object.values(nameStyles).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" avatarStyle="glyph" nameStyle={s} />
      </BoxListItem>
    ));

    const initialsAvatars = Object.values(nameStyles).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" nameStyle={s} />
      </BoxListItem>
    ));

    const imageAvatars = Object.values(nameStyles).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" nameStyle={s} image="https://source.unsplash.com/random/50x50" />
      </BoxListItem>
    ));

    return (
      <Box flexDirection="column">
        <BoxList mb={5}>
          {glyphAvatars}
        </BoxList>
        <BoxList mb={5}>
          {initialsAvatars}
        </BoxList>
        <BoxList>
          {imageAvatars}
        </BoxList>
      </Box>
    );
  })
  .add('With different statuses', () => {
    const glyphAvatars = Object.values(statuses).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" avatarStyle="glyph" status={s} />
      </BoxListItem>
    ));

    const initialsAvatars = Object.values(statuses).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" status={s} />
      </BoxListItem>
    ));

    const imageAvatars = Object.values(statuses).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" status={s} image="https://source.unsplash.com/random/50x50" />
      </BoxListItem>
    ));

    return (
      <Box flexDirection="column">
        <BoxList mb={5}>
          {glyphAvatars}
        </BoxList>
        <BoxList mb={5}>
          {initialsAvatars}
        </BoxList>
        <BoxList>
          {imageAvatars}
        </BoxList>
      </Box>
    );
  })
  .add('With different presences', () => {
    const glyphAvatars = Object.values(presences).map(p => (
      <BoxListItem key={p} mr={3}>
        <Avatar name="Fake Name" avatarStyle="glyph" presence={p} />
      </BoxListItem>
    ));

    const initialsAvatars = Object.values(presences).map(p => (
      <BoxListItem key={p} mr={3}>
        <Avatar name="Fake Name" presence={p} />
      </BoxListItem>
    ));

    const imageAvatars = Object.values(presences).map(p => (
      <BoxListItem key={p} mr={3}>
        <Avatar name="Fake Name" presence={p} image="https://source.unsplash.com/random/50x50" />
      </BoxListItem>
    ));

    return (
      <Box flexDirection="column">
        <BoxList mb={5}>
          {glyphAvatars}
        </BoxList>
        <BoxList mb={5}>
          {initialsAvatars}
        </BoxList>
        <BoxList>
          {imageAvatars}
        </BoxList>
      </Box>
    );
  })
  .add('With different sizes', () => {
    const glyphAvatars = Object.values(sizes).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" avatarStyle="glyph" size={s} />
      </BoxListItem>
    ));

    const initialsAvatars = Object.values(sizes).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" size={s} />
      </BoxListItem>
    ));

    const imageAvatars = Object.values(sizes).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" size={s} image="https://source.unsplash.com/random/50x50" />
      </BoxListItem>
    ));

    const statusPresenceAvatars = Object.values(sizes).map(s => (
      <BoxListItem key={s} mr={3}>
        <Avatar name="Fake Name" size={s} status="warning" presence="unknown" />
      </BoxListItem>
    ));

    return (
      <Box flexDirection="column">
        <BoxList mb={5}>
          {glyphAvatars}
        </BoxList>
        <BoxList mb={5}>
          {initialsAvatars}
        </BoxList>
        <BoxList mb={5}>
          {imageAvatars}
        </BoxList>
        <BoxList>
          {statusPresenceAvatars}
        </BoxList>
      </Box>
    );
  })
  .add('With custom onClick', () => (
    <Avatar name="Fake Name" onClick={action('clicked')} />
  )); 
