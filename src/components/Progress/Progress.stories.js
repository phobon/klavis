import React from 'react';
import { action } from '@storybook/addon-actions';
import uuidv4 from 'uuid/v4';

import { Box, Text } from '@phobon/base';

import Progress from './Progress';
import ProgressStep from './ProgressStep';

export default {
  component: Progress,
  title: 'Components/Progress',
};

const TestProgress = props => (
  <Progress id={uuidv4()} {...props}>
    <ProgressStep>
      <Box flexDirection="column">
        <Text>First Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
    <ProgressStep>
      <Box flexDirection="column">
        <Text>Second Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
    <ProgressStep>
      <Box flexDirection="column">
        <Text>Third Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
    <ProgressStep current>
      <Box flexDirection="column">
        <Text>Fourth Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
    <ProgressStep>
      <Box flexDirection="column">
        <Text>Fifth Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
    <ProgressStep>
      <Box flexDirection="column">
        <Text>Sixth Step</Text>
        <Text fontSize={0} color="grayscale.2">Additional content</Text>
      </Box>
    </ProgressStep>
  </Progress>
);

export const withAndWithoutLabels = () => (
  <Box flexDirection="column" fullWidth p={7}>
    <TestProgress mb={8} />
    <Progress>
      <ProgressStep tooltip="First Step" />
      <ProgressStep tooltip="Second Step" />
      <ProgressStep tooltip="Third Step" />
      <ProgressStep tooltip="Fourth Step" current />
      <ProgressStep tooltip="Fifth Step" />
      <ProgressStep tooltip="Sixth Step" />
    </Progress>
  </Box>
);

export const withDifferentModes = () => (
  <Box flexDirection="column" fullWidth p={7}>
    <TestProgress mb={8} mode="compact" />
    <TestProgress />
  </Box>
);

export const withDifferentBackgroundColours = () => (
  <Box flexDirection="column" fullWidth p={7}>
    <TestProgress mb={8} bg="grayscale.3" />
    <TestProgress mb={8} bg="grayscale.4" />
    <TestProgress mb={8} bg="grayscale.5" />

    <TestProgress mb={4} bg="grayscale.3" mode="compact" />
    <TestProgress mb={4} bg="grayscale.4" mode="compact" />
    <TestProgress bg="grayscale.5" mode="compact" />
  </Box>
);

export const withDifferentColours = () => (
  <Box flexDirection="column" fullWidth p={7}>
    <TestProgress mb={8} color="reds.5" />
    <TestProgress mb={8} color="purples.5" />
    <TestProgress mb={8} color="oranges.6" />

    <TestProgress mb={4} color="reds.5" mode="compact" />
    <TestProgress mb={4} color="purples.5" mode="compact" />
    <TestProgress color="oranges.6" mode="compact" />
  </Box>
);

export const withVerticalOrientation = () => (
  <Box fullWidth p={7}>
    <TestProgress orientation="vertical" mr={10} />
    <TestProgress orientation="vertical" mode="compact" />
  </Box>
);

export const withCustomOnClicksForSteps = () => (
  <Box flexDirection="column" p={7}>
    <Progress mb={8}>
      <ProgressStep label="First Step" onClick={action('First Step clicked')} />
      <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
      <ProgressStep label="Third Step" onClick={action('Third Step clicked')} current />
      <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
    </Progress>

    <Progress mode="compact">
      <ProgressStep label="First Step" onClick={action('First Step clicked')} />
      <ProgressStep label="Second Step" onClick={action('Second Step clicked')} />
      <ProgressStep label="Third Step" onClick={action('Third Step clicked')} current />
      <ProgressStep label="Fourth Step" onClick={action('Fourth Step clicked')} />
    </Progress>
  </Box>
);