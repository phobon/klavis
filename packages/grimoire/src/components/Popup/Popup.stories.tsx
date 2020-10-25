import React from "react";

import { Box, Text, Image, Card } from "@phobon/base";

import { Popup } from "./Popup";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Spacer } from "../Spacer";

export default {
  component: Popup,
  title: "Components/Popup",
};

const Content = () => (
  <>
    <svg
      width="96"
      height="91"
      viewBox="0 0 96 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z"
        fill="#6FCF97"
      />
    </svg>
    <Text>Content</Text>
  </>
);

const buttonVariants: any = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "warning",
  "success",
  "link",
  "clean",
];

export const withAndWithoutLabels = () => (
  <Box>
    <Popup trigger="with label" mr={3}>
      <Content />
    </Popup>

    <Popup>
      <Content />
    </Popup>
  </Box>
);

export const withVaryingAlignment = () => (
  <Box
    fullWidth
    justifyContent="space-between"
    style={{ height: "100vh" }}
    pb={6}
  >
    <Box fullHeight flexDirection="column" justifyContent="space-between">
      <Popup trigger="opens down">
        <Content />
      </Popup>
      <Popup trigger="opens up">
        <Content />
      </Popup>
    </Box>
    <Box fullHeight flexDirection="column" justifyContent="space-between">
      <Popup trigger="opens down">
        <Content />
      </Popup>
      <Popup trigger="opens up">
        <Content />
      </Popup>
    </Box>
  </Box>
);

export const withDefinedDirectionalPopupAlignment = () => (
  <Box
    fullWidth
    justifyContent="space-between"
    style={{ height: "100vh" }}
    pb={6}
  >
    <Box fullHeight flexDirection="column" justifyContent="space-between">
      <Popup trigger="left opens down" popupDirection="left">
        <Content />
      </Popup>
      <Popup trigger="left opens up" popupDirection="left">
        <Content />
      </Popup>
    </Box>
    <Box fullHeight flexDirection="column" justifyContent="space-between">
      <Popup trigger="right opens down" popupDirection="right">
        <Content />
      </Popup>
      <Popup trigger="right opens up" popupDirection="right">
        <Content />
      </Popup>
    </Box>
  </Box>
);

export const withAlternateTriggers = () => (
  <Popup
    trigger={<Avatar name="Cool McDude" status="warning" presence="unknown" />}
    variant="clean"
  >
    <Content />
  </Popup>
);

export const withButtonVariants = () =>
  buttonVariants.map((a) => (
    <Popup key={a} variant={a} trigger={a} mx={2}>
      <Content />
    </Popup>
  ));

export const withDefinedDirections = () => (
  <Box fullWidth justifyContent="space-between">
    <Popup trigger="opens down" popupDirection="down" mr={3}>
      <Content />
    </Popup>
    <Popup trigger="opens up" popupDirection="up" mr={3}>
      <Content />
    </Popup>
    <Popup trigger="opens left" popupDirection="left" mr={3}>
      <Content />
    </Popup>
    <Popup trigger="opens right" popupDirection="right">
      <Content />
    </Popup>
  </Box>
);

export const withDifferentDistances = () => (
  <Popup trigger="with label" animationOptions={{ distance: 20 }}>
    <Content />
  </Popup>
);

export const withAndWithoutCloseAfterAction = () => (
  <Box>
    <Popup trigger="closeAfterAction" closeAfterAction mr={3}>
      <Content />
    </Popup>

    <Popup trigger="default">
      <Content />
    </Popup>
  </Box>
);

export const withProfileMenu = () => (
  <Box width={500}>
    <Popup
      shape="square"
      trigger={
        <Image
          fullHeight
          borderRadius="inherit"
          src="https://source.unsplash.com/random/100x100"
        />
      }
      transition={{ duration: 0.15 }}
    >
      <Card
        flexDirection="column"
        fullWidth
        width={250}
        py={3}
        alignItems="center"
        borderRadius={4}
      >
        <Button
          as="a"
          variant="tertiary"
          borderRadius={0}
          justifyContent="flex-start"
          fullWidth
          pl={4}
          pr={4}
        >
          Profile
        </Button>
        <Spacer length="80%" my={3} thickness={1} />
        <Button
          as="a"
          variant="tertiary"
          borderRadius={0}
          justifyContent="flex-start"
          fullWidth
          pl={4}
          pr={4}
        >
          Edit Profile
        </Button>
        <Button
          as="a"
          variant="tertiary"
          borderRadius={0}
          justifyContent="flex-start"
          fullWidth
          pl={4}
          pr={4}
        >
          Edit Work Availability
        </Button>
        <Spacer length="80%" my={3} thickness={1} />
        <Button
          as="a"
          variant="tertiary"
          borderRadius={0}
          justifyContent="flex-start"
          fullWidth
          pl={4}
          pr={4}
        >
          Account Settings
        </Button>
        <Button
          as="a"
          variant="tertiary"
          borderRadius={0}
          justifyContent="flex-start"
          fullWidth
          pl={4}
          pr={4}
        >
          Sign Out
        </Button>
      </Card>
    </Popup>
  </Box>
);
