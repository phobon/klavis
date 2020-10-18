import React from "react";

import { Stack, Box } from "@phobon/base";

import { Spacer } from "./Spacer";

export default {
  component: Spacer,
  title: "Components/Spacer",
};

export const withDifferentLengths = () => (
  <Stack fullWidth space={5}>
    <Spacer />
    <Spacer length="50%" />
    <Spacer length="100%" />
  </Stack>
);

export const withDifferentThicknesses = () => (
  <Stack fullWidth space={5}>
    <Spacer />
    <Spacer thickness="1px" />
    <Spacer thickness="4px" />
  </Stack>
);

export const withDifferentBackgroundColours = () => (
  <Stack fullWidth space={5}>
    <Spacer bg="grayscale.2" />
    <Spacer bg="grayscale.7" />
    <Spacer bg="oranges.7" />
  </Stack>
);

export const withDifferentDirections = () => (
  <Stack fullWidth space={5}>
    <Box width={100} mr={7}>
      <Spacer bg="grayscale.3" />
    </Box>
    <Box height={100}>
      <Spacer direction="vertical" bg="grayscale.3" />
    </Box>
  </Stack>
);

export const withResponsiveDisplays = () => (
  <Box height={100}>
    <Spacer direction="vertical" bg="grayscale.3" display={["none", "block"]} />
  </Box>
);
