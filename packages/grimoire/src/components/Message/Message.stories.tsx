import React from "react";
import { Box, Text } from "@phobon/base";

import { AlertDiamond } from "../../icons/AlertDiamond";
import { AlertTriangle } from "../../icons/AlertTriangle";
import { QuestionCircle } from "../../icons/QuestionCircle";
import { CheckCircle } from "../../icons/CheckCircle";

import { Message } from "./Message";

export default {
  component: Message,
  title: "Components/Message",
};

const variants: any = [
  "Info",
  "Question",
  "Success",
  "Warning",
  "Error",
  "Neutral",
  "Dark",
];

const glyphs = {
  neutral: <QuestionCircle color="inherit" size={20} />,
  dark: <QuestionCircle color="inherit" size={20} />,
  info: <QuestionCircle color="inherit" size={20} />,
  question: <QuestionCircle color="inherit" size={20} />,
  success: <CheckCircle color="inherit" size={20} />,
  warning: <AlertTriangle color="inherit" size={20} />,
  error: <AlertDiamond color="inherit" size={20} />,
};

export const withDifferentVariants = () =>
  variants.map((v) => (
    <Message key={v} variant={v.toLowerCase()} mr={3}>
      {v}
    </Message>
  ));

export const withDifferentGlyphs = () =>
  variants.map((v) => (
    <Message
      key={v}
      variant={v.toLowerCase()}
      mr={3}
      glyph={glyphs[v.toLowerCase()]}
    >
      {v}
    </Message>
  ));
export const withComposedChildren = () => (
  <Box flexDirection="column" alignItems="flex-start">
    {variants.map((v) => (
      <Message variant={v.toLowerCase()} key={v} mb={3}>
        <Text
          fontWeight="bold"
          fontSize={2}
          lineHeight={0}
          mb={2}
          color="inherit"
        >
          Message heading
        </Text>
        <Text color="inherit">Some text to go along with this message</Text>
      </Message>
    ))}
  </Box>
);

export const withComposedChildrenAndGlyphs = () => (
  <Box flexDirection="column" alignItems="flex-start">
    {variants.map((v) => (
      <Message
        variant={v.toLowerCase()}
        key={v}
        mb={3}
        glyph={glyphs[v.toLowerCase()]}
      >
        <Text
          fontWeight="bold"
          fontSize={2}
          mb={2}
          lineHeight={0}
          color="inherit"
        >
          Message heading
        </Text>
        <Text color="inherit">Some text to go along with this message</Text>
      </Message>
    ))}
  </Box>
);
