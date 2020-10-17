import React from "react";
import { action } from "@storybook/addon-actions";

import { Stack, Box } from "@phobon/base";

import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

const sizes: any = ["s", "m", "l"];
const statuses: any = ["none", "error", "warning", "success"];
const presences: any = ["none", "unknown", "unavailable", "busy", "available"];

export const withVariants = () => (
  <Stack space={3} flexDirection="row">
    <Avatar name="Fake Name" />
    <Avatar name="Fake Name" variant="glyph" />
    <Avatar name="Fake Name" image="https://source.unsplash.com/random/50x50" />
  </Stack>
);

export const withDifferentColours = () => (
  <Stack space={3} flexDirection="row">
    <Avatar name="Fake Name" variant="glyph" bg="violets.6" color="white" />
    <Avatar name="Fake Name" variant="glyph" bg="cyans.6" color="cyans.2" />
    <Avatar name="Fake Name" variant="glyph" bg="oranges.6" color="white" />
  </Stack>
);

export const withDifferentStatuses = () => {
  const glyphAvatars = Object.values(statuses).map((s: any) => (
    <Box key={s}>
      <Avatar name="Fake Name" variant="glyph" status={s} />
    </Box>
  ));

  const initialsAvatars = Object.values(statuses).map((s: any) => (
    <Box key={s}>
      <Avatar name="Fake Name" status={s} />
    </Box>
  ));

  const imageAvatars = Object.values(statuses).map((s: any) => (
    <Box key={s}>
      <Avatar
        name="Fake Name"
        status={s}
        image="https://source.unsplash.com/random/50x50"
      />
    </Box>
  ));

  return (
    <Stack space={5}>
      <Stack space={3} flexDirection="row">
        {glyphAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {initialsAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {imageAvatars}
      </Stack>
    </Stack>
  );
};

export const withDifferentPresences = () => {
  const glyphAvatars = Object.values(presences).map((p: any) => (
    <Box key={p}>
      <Avatar name="Fake Name" variant="glyph" presence={p} />
    </Box>
  ));

  const initialsAvatars = Object.values(presences).map((p: any) => (
    <Box key={p}>
      <Avatar name="Fake Name" presence={p} />
    </Box>
  ));

  const imageAvatars = Object.values(presences).map((p: any) => (
    <Box key={p}>
      <Avatar
        name="Fake Name"
        presence={p}
        image="https://source.unsplash.com/random/50x50"
      />
    </Box>
  ));

  return (
    <Stack space={5}>
      <Stack space={3} flexDirection="row">
        {glyphAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {initialsAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {imageAvatars}
      </Stack>
    </Stack>
  );
};

export const withDifferentSizes = () => {
  const glyphAvatars = Object.values(sizes).map((s: any) => (
    <Box key={s}>
      <Avatar name="Fake Name" variant="glyph" size={s} />
    </Box>
  ));

  const initialsAvatars = Object.values(sizes).map((s: any) => (
    <Box key={s}>
      <Avatar name="Fake Name" size={s} />
    </Box>
  ));

  const imageAvatars = Object.values(sizes).map((s: any) => (
    <Box key={s}>
      <Avatar
        name="Fake Name"
        size={s}
        image="https://source.unsplash.com/random/50x50"
      />
    </Box>
  ));

  const statusPresenceAvatars = Object.values(sizes).map((s: any) => (
    <Box key={s}>
      <Avatar name="Fake Name" size={s} status="warning" presence="unknown" />
    </Box>
  ));

  return (
    <Stack space={5}>
      <Stack space={3} flexDirection="row">
        {glyphAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {initialsAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {imageAvatars}
      </Stack>
      <Stack space={3} flexDirection="row">
        {statusPresenceAvatars}
      </Stack>
    </Stack>
  );
};

export const withCustomOnClick = () => (
  <Avatar name="Fake Name" onClick={action("clicked")} />
);
