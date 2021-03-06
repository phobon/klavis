import React, { useState } from "react";
import { Box } from "@phobon/base";

import { Toggle } from "./Toggle";

export default {
  component: Toggle,
  title: "Components/Toggle",
};

const ToggleHelper = ({ ...props }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <Toggle toggled={toggled} onClick={() => setToggled(!toggled)} {...props} />
  );
};

export const withDifferentStates = () => (
  <Box>
    <Toggle tooltip="Toggled" toggled mr={2} />
    <Toggle tooltip="Not toggled" mr={2} />
    <Toggle tooltip="Disabled" disabled />
  </Box>
);

export const withTheAbilityToToggle = () => (
  <ToggleHelper tooltip="Click to toggle" />
);

export const withDifferentColours = () => (
  <Box>
    <Toggle tooltip="Toggled blue" bg={["blues.6", "blues.5"]} toggled mr={2} />
    <Toggle
      tooltip="Toggled purple"
      bg={["purples.6", "purples.5"]}
      mr={2}
      toggled
    />
    <Toggle tooltip="Toggled orange" bg={["oranges.6", "oranges.6"]} toggled />
  </Box>
);

export const withDifferentSizes = () => (
  <Box>
    <Toggle tooltip="Small (s)" mr={2} size="s" />
    <Toggle tooltip="Small (s)" mr={2} size="s" toggled />
  </Box>
);
