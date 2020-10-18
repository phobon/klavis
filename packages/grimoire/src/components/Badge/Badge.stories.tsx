import React from "react";

import { Stack } from "@phobon/base";

import { Badge } from "./Badge";

export default {
  component: Badge,
  title: "Components/Badge",
};

export const withDifferentColours = () => (
  <Stack space={3} fullWidth fullHeight alignItems="flex-start">
    <Badge bg="guidance.warning.1" color="guidance.warning.0">
      1
    </Badge>
    <Badge bg="guidance.info.1" color="guidance.info.0">
      2
    </Badge>
    <Badge bg="guidance.success.1" color="guidance.success.0">
      3
    </Badge>
    <Badge bg="guidance.error.1" color="guidance.error.0">
      4
    </Badge>
  </Stack>
);

export const withDifferentTextLength = () => (
  <Stack space={3} fullWidth fullHeight alignItems="flex-start">
    <Badge>5</Badge>
    <Badge>555</Badge>
    <Badge>Text</Badge>
    <Badge>Lots of text</Badge>
  </Stack>
);
