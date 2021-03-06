import React from "react";
import { Stack } from "@phobon/base";

import { AvatarGroup } from "./AvatarGroup";

export default {
  component: AvatarGroup,
  title: "Components/AvatarGroup",
};

export const withDefaultProps = () => {
  const data: any = [
    {
      name: "First Person",
      variant: "glyph",
      bg: "cyans.6",
      color: "cyans.0",
    },
    {
      name: "Second Person",
      variant: "initials",
      bg: "oranges.6",
      color: "oranges.0",
    },
    {
      name: "Third Person",
      variant: "glyph",
      bg: "purples.6",
    },
    {
      name: "Fourth Person",
      variant: "initials",
    },
    {
      name: "Fifth Person",
      variant: "glyph",
      bg: "greens.6",
    },
    {
      name: "Sixth Person",
      variant: "glyph",
      bg: "yellows.6",
    },
  ];
  return <AvatarGroup data={data} />;
};

export const withGridVariant = () => {
  const data: any = [
    {
      name: "First Person",
      variant: "glyph",
      bg: "cyans.6",
      color: "cyans.0",
    },
    {
      name: "Second Person",
      variant: "initials",
      bg: "oranges.6",
      color: "oranges.0",
    },
    {
      name: "Third Person",
      variant: "glyph",
      bg: "purples.6",
    },
    {
      name: "Fourth Person",
      variant: "initials",
    },
    {
      name: "Fifth Person",
      variant: "glyph",
      bg: "greens.6",
    },
    {
      name: "Sixth Person",
      variant: "glyph",
      bg: "yellows.6",
    },
  ];
  return <AvatarGroup data={data} variant="grid" width={150} />;
};

export const withDifferentSizes = () => {
  const data: any = [
    {
      name: "First Person",
      variant: "glyph",
      bg: "cyans.6",
      color: "cyans.0",
    },
    {
      name: "Second Person",
      variant: "initials",
      bg: "oranges.6",
      color: "oranges.0",
    },
    {
      name: "Third Person",
      variant: "glyph",
      bg: "purples.6",
    },
    {
      name: "Fourth Person",
      variant: "initials",
    },
    {
      name: "Fifth Person",
      variant: "glyph",
      bg: "greens.6",
    },
    {
      name: "Sixth Person",
      variant: "glyph",
      bg: "yellows.6",
    },
  ];

  const sizes: any = ["s", "m", "l"];
  return (
    <Stack space={3}>
      {sizes.map((s) => (
        <AvatarGroup data={data} size={s} key={s} />
      ))}
    </Stack>
  );
};

export const withDifferentGridSizes = () => {
  const data: any = [
    {
      name: "First Person",
      variant: "glyph",
      bg: "cyans.6",
      color: "cyans.0",
    },
    {
      name: "Second Person",
      variant: "initials",
      bg: "oranges.6",
      color: "oranges.0",
    },
    {
      name: "Third Person",
      variant: "glyph",
      bg: "purples.6",
    },
    {
      name: "Fourth Person",
      variant: "initials",
    },
    {
      name: "Fifth Person",
      variant: "glyph",
      bg: "greens.6",
    },
    {
      name: "Sixth Person",
      variant: "glyph",
      bg: "yellows.6",
    },
  ];

  const gridGaps: any = [1, 2, 3];
  return (
    <Stack space={3} width={150}>
      {gridGaps.map((s) => (
        <AvatarGroup data={data} key={s} gridGap={s} variant="grid" fullWidth />
      ))}
    </Stack>
  );
};

export const withFewerThanMaxCount = () => {
  const data: any = [
    {
      name: "First Person",
      variant: "glyph",
      bg: "cyans.6",
      color: "cyans.0",
    },
    {
      name: "Second Person",
      variant: "initials",
      bg: "oranges.6",
      color: "oranges.0",
    },
    {
      name: "Third Person",
      variant: "glyph",
      bg: "purples.6",
    },
  ];

  return <AvatarGroup data={data} />;
};
