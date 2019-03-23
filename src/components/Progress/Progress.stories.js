import React from 'react';
import { storiesOf } from '@storybook/react';

import Check from 'rmdi/lib/Check';

import { Box } from '@phobon/base';

import Progress from './Progress';
import ProgressStep from './ProgressStep';

storiesOf('Components/Progress', module)
  .add('With and without labels', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8}>
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>
      <Progress showLabels={false}>
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>
    </Box>
  ))
  .add('With different sizes', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8} size="s">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>

      <Progress mb={8} size="m">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>

      <Progress size="l">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>
    </Box>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8} color="reds.5">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>

      <Progress mb={8} color="purples.4">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>

      <Progress color="oranges.4">
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" isCurrent />
        <ProgressStep label="Fifth Step" />
        <ProgressStep label="Sixth Step" />
      </Progress>
    </Box>
  ))
  .add('With custom completed glyph', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8} color="reds.5" completeGlyph={<Check />}>
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" isCurrent />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" />
      </Progress>

      <Progress mb={8} color="purples.4" completeGlyph={<Check />}>
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" isCurrent />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" />
      </Progress>

      <Progress color="oranges.4" completeGlyph={<Check />}>
        <ProgressStep label="First Step" />
        <ProgressStep label="Second Step" isCurrent />
        <ProgressStep label="Third Step" />
        <ProgressStep label="Fourth Step" />
      </Progress>
    </Box>
  ));