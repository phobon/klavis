import React from "react";
import { action } from "@storybook/addon-actions";
import uuidv4 from "uuid/v4";

import { Box, Text } from "@phobon/base";

import { Progress } from "./Progress";
import { ProgressStep } from "./ProgressStep";

export default {
  component: Progress,
  title: "Components/Progress",
};

const TestProgress = (props) => (
  <Progress id={uuidv4()} {...props}>
    <ProgressStep aria-label="step1">
      <Box flexDirection="column">
        <Text>First Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
    <ProgressStep aria-label="step2">
      <Box flexDirection="column">
        <Text>Second Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
    <ProgressStep aria-label="step3">
      <Box flexDirection="column">
        <Text>Third Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
    <ProgressStep aria-label="step4" current>
      <Box flexDirection="column">
        <Text>Fourth Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
    <ProgressStep aria-label="step5">
      <Box flexDirection="column">
        <Text>Fifth Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
    <ProgressStep aria-label="step6">
      <Box flexDirection="column">
        <Text>Sixth Step</Text>
        <Text fontSize={0} color="grayscale.2">
          Additional content
        </Text>
      </Box>
    </ProgressStep>
  </Progress>
);

export const withAndWithoutLabels = () => (
  <Box flexDirection="column" fullWidth p={7}>
    <TestProgress mb={8} />
    <Progress id={uuidv4()}>
      <ProgressStep aria-label="step1" tooltip="First Step" />
      <ProgressStep aria-label="step2" tooltip="Second Step" />
      <ProgressStep aria-label="step3" tooltip="Third Step" />
      <ProgressStep aria-label="step4" tooltip="Fourth Step" current />
      <ProgressStep aria-label="step5" tooltip="Fifth Step" />
      <ProgressStep aria-label="step6" tooltip="Sixth Step" />
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
    <Progress id={uuidv4()} mb={8}>
      <ProgressStep
        aria-label="step1"
        label="First Step"
        onClick={action("First Step clicked")}
      />
      <ProgressStep
        aria-label="step1"
        label="Second Step"
        onClick={action("Second Step clicked")}
      />
      <ProgressStep
        aria-label="step1"
        label="Third Step"
        onClick={action("Third Step clicked")}
        current
      />
      <ProgressStep
        aria-label="step1"
        label="Fourth Step"
        onClick={action("Fourth Step clicked")}
      />
    </Progress>

    <Progress id={uuidv4()} mode="compact">
      <ProgressStep
        aria-label="step1"
        label="First Step"
        onClick={action("First Step clicked")}
      />
      <ProgressStep
        aria-label="step1"
        label="Second Step"
        onClick={action("Second Step clicked")}
      />
      <ProgressStep
        aria-label="step1"
        label="Third Step"
        onClick={action("Third Step clicked")}
        current
      />
      <ProgressStep
        aria-label="step1"
        label="Fourth Step"
        onClick={action("Fourth Step clicked")}
      />
    </Progress>
  </Box>
);
