import React from "react";

import { Stack } from "@phobon/base";

import { Button } from "../Button";
import { Tag } from "../Tag";

import { PageHeader } from "./PageHeader";

export default {
  component: PageHeader,
  title: "Components/PageHeader",
};

export const withASmpleHeading = () => <PageHeader heading="Simple heading" />;

export const withATagline = () => (
  <PageHeader heading="Simple heading" tagline="Tagline" />
);

export const withAnAction = () => (
  <PageHeader
    heading="Simple heading"
    tagline="Tagline"
    actions={<Button variant="primary">Primary</Button>}
  />
);

export const withSeveralActions = () => (
  <PageHeader
    heading="Simple heading"
    tagline="Tagline"
    actions={
      <Stack flexDirection="row" space={2}>
        <Button>Secondary</Button>
        <Button>Secondary</Button>
        <Button variant="primary">Primary</Button>
      </Stack>
    }
  />
);

export const withChildren = () => (
  <PageHeader
    heading="Simple heading"
    tagline="Tagline"
    actions={
      <Stack flexDirection="row" space={2}>
        <Button>Secondary</Button>
        <Button>Secondary</Button>
        <Button variant="primary">Primary</Button>
      </Stack>
    }
  >
    <Stack flexDirection="row" space={3}>
      <Tag>A child tag</Tag>
      <Tag>Another child tag</Tag>
    </Stack>
  </PageHeader>
);
