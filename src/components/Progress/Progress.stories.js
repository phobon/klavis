import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Check from 'rmdi/lib/Check';

import { Box } from '@phobon/base';

import Progress from './Progress';
import ProgressStep from './ProgressStep';

const TestProgress = props => (
  <Progress {...props}>
    <ProgressStep label="First Step" />
    <ProgressStep label="Second Step" />
    <ProgressStep label="Third Step" />
    <ProgressStep label="Fourth Step" isCurrent />
    <ProgressStep label="Fifth Step" />
    <ProgressStep label="Sixth Step" />
  </Progress>
);

storiesOf('Components/Progress', module)
  .add('With and without labels', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} />
      <TestProgress showLabels={false} />
    </Box>
  ))
  .add('With different modes', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} mode="compact" width={150} />
      <TestProgress />
    </Box>
  ))
  .add('With different background colours', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} bg="grayscale.3" />
      <TestProgress mb={8} bg="grayscale.4" />
      <TestProgress mb={8} bg="grayscale.5" />

      <TestProgress mb={8} bg="grayscale.3" mode="compact" width={150} />
      <TestProgress mb={8} bg="grayscale.4" mode="compact" width={150} />
      <TestProgress mb={8} bg="grayscale.5" mode="compact" width={150} />
    </Box>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} color="reds.5" />
      <TestProgress mb={8} color="purples.5" />
      <TestProgress mb={8} color="oranges.5" />

      <TestProgress mb={8} color="reds.5" mode="compact" width={150} />
      <TestProgress mb={8} color="purples.5" mode="compact" width={150} />
      <TestProgress mb={8} color="oranges.5" mode="compact" width={150} />
    </Box>
  ))
  .add('With custom completed glyph', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} color="reds.5" completeGlyph={<Check />} />
      <TestProgress mb={8} color="purples.5" completeGlyph={<Check />} />
      <TestProgress mb={8} color="oranges.5" completeGlyph={<Check />} />

      <TestProgress mb={8} color="reds.5" mode="compact" width={150} completeGlyph={<Check />} />
      <TestProgress mb={8} color="purples.5" mode="compact" width={150} completeGlyph={<Check />} />
      <TestProgress mb={8} color="oranges.5" mode="compact" width={150} completeGlyph={<Check />} />
    </Box>
  ))
  .add('With custom onClicks for steps', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8} completeGlyph={<Check />}>
        <ProgressStep label="First Step" onClick={action('First Step clicked')} />
        <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
        <ProgressStep label="Third Step" onClick={action('Third Step clicked')} isCurrent />
        <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
      </Progress>

      <Progress width={150} mode="compact">
        <ProgressStep label="First Step" onClick={action('First Step clicked')} />
        <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
        <ProgressStep label="Third Step" onClick={action('Third Step clicked')} isCurrent />
        <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
      </Progress>
    </Box>
  ));