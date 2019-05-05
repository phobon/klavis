import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box } from '@phobon/base';

import Remove from '../../icons/Remove';

import Progress from './Progress';
import ProgressStep from './ProgressStep';

const TestProgress = props => (
  <Progress {...props}>
    <ProgressStep label="First Step">First Step</ProgressStep>
    <ProgressStep label="Second Step">Second Step</ProgressStep>
    <ProgressStep label="Third Step">Third Step</ProgressStep>
    <ProgressStep label="Fourth Step" isCurrent>Fourth Step</ProgressStep>
    <ProgressStep label="Fifth Step">Fifth Step</ProgressStep>
    <ProgressStep label="Sixth Step">Sixth Step</ProgressStep>
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
      <TestProgress mb={8} mode="compact" />
      <TestProgress />
    </Box>
  ))
  .add('With different background colours', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} bg="grayscale.3" />
      <TestProgress mb={8} bg="grayscale.4" />
      <TestProgress mb={8} bg="grayscale.5" />

      <TestProgress mb={4} bg="grayscale.3" mode="compact" />
      <TestProgress mb={4} bg="grayscale.4" mode="compact" />
      <TestProgress bg="grayscale.5" mode="compact" />
    </Box>
  ))
  .add('With different colours', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} color="reds.5" />
      <TestProgress mb={8} color="purples.5" />
      <TestProgress mb={8} color="oranges.5" />

      <TestProgress mb={4} color="reds.5" mode="compact" />
      <TestProgress mb={4} color="purples.5" mode="compact" />
      <TestProgress color="oranges.5" mode="compact" />
    </Box>
  ))
  .add('With vertical orientation', () => (
    <Box height={400} fullWidth p={7}>
      <TestProgress orientation="vertical" mr={10} />
      <TestProgress orientation="vertical" mode="compact" />
    </Box>
  ))
  .add('With custom completed glyph', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <TestProgress mb={8} color="reds.5" completeGlyph={<Remove size={12} />} />
      <TestProgress mb={8} color="purples.5" completeGlyph={<Remove size={12} />} />
      <TestProgress mb={8} color="oranges.5" completeGlyph={<Remove size={12} />} />
    </Box>
  ))
  .add('With custom onClicks for steps', () => (
    <Box flexDirection="column" fullWidth p={7}>
      <Progress mb={8} completeGlyph={<Remove size={12} />}>
        <ProgressStep label="First Step" onClick={action('First Step clicked')} />
        <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
        <ProgressStep label="Third Step" onClick={action('Third Step clicked')} isCurrent />
        <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
      </Progress>

      <Progress mode="compact">
        <ProgressStep label="First Step" onClick={action('First Step clicked')} />
        <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
        <ProgressStep label="Third Step" onClick={action('Third Step clicked')} isCurrent />
        <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
      </Progress>
    </Box>
  ));