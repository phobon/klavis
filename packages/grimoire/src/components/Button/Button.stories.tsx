import React from "react";
import { action } from "@storybook/addon-actions";

import { Stack } from "@phobon/base";

import { Button } from "./Button";
import { User } from "../../icons/User";

export default {
  component: Button,
  title: "Components/Button",
};

const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "warning",
  "success",
  "link",
  "clean",
];

const buttonSizes = ["s", "m", "l"];

const shapes = ["circle", "square"];

export const withDifferentVariants = () =>
  buttonVariants.map((a) => (
    <Button key={a} variant={a} mr={2} mb={2} onClick={action("clicked")}>
      {a}
    </Button>
  ));

export const withADisabledState = () =>
  buttonVariants.map((a) => (
    <Button
      key={a}
      variant={a}
      mr={2}
      mb={2}
      onClick={action("clicked")}
      disabled
    >
      {a}
    </Button>
  ));

export const withAToggledState = () =>
  buttonVariants.map((a) => (
    <Button
      key={a}
      variant={a}
      mr={2}
      mb={2}
      onClick={action("clicked")}
      toggled
    >
      {a}
    </Button>
  ));

export const withDifferentSizes = () =>
  buttonSizes.map((s) => (
    <Button
      key={s}
      mr={2}
      mb={2}
      size={s}
      onClick={action("clicked")}
    >{`size: ${s}`}</Button>
  ));

export const withTooltips = () =>
  buttonVariants.map((a) => (
    <Button
      key={a}
      variant={a}
      mr={2}
      mb={2}
      onClick={action("clicked")}
      tooltip="This is a tooltip!"
    >
      {a}
    </Button>
  ));

export const withDifferentShapes = () =>
  shapes.map((s) => (
    <Button key={s} mr={2} mb={2} shape={s} onClick={action("clicked")}>
      <User />
    </Button>
  ));

export const withCoverProps = () => (
  <Stack width={500} space={3}>
    <Button fullWidth>Default</Button>
    {buttonSizes.map((s) => (
      <Button
        key={s}
        size={s}
        fullWidth
        onClick={action("clicked")}
      >{`size: ${s}`}</Button>
    ))}
  </Stack>
);
