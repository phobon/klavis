/* eslint-disable react/no-array-index-key */
import React from "react";

import { Stack } from "@phobon/base";

import { AlertCircle } from "./AlertCircle";
import { AlertDiamond } from "./AlertDiamond";
import { AlertTriangle } from "./AlertTriangle";
import { CheckCircle } from "./CheckCircle";
import { InfoCircle } from "./InfoCircle";
import { QuestionCircle } from "./QuestionCircle";
import { Remove } from "./Remove";
import { User } from "./User";

export default {
  title: "Components/Icons",
};

export const withAllIcons = () => (
  <Stack space={3}>
    <AlertCircle />
    <AlertDiamond />
    <AlertTriangle />
    <CheckCircle />
    <InfoCircle />
    <QuestionCircle />
    <Remove />
    <User />
  </Stack>
);

export const withDifferentColours = () => {
  const colours = ["blues.7", "oranges.7", "purples.7"];
  return (
    <Stack space={3}>
      {colours.map((c) => (
        <Stack space={3} flexDirection="row" key={c}>
          <AlertCircle stroke={c} />
          <User fill={c} />
        </Stack>
      ))}
    </Stack>
  );
};
