/* eslint-disable react/default-props-match-prop-types */
/** @jsx jsx */
import React, { forwardRef } from "react";
import { jsx } from "@emotion/react";
import { Box, BoxProps } from "@phobon/base";

const variantColour = (props) => {
  const variants = {
    info: {
      backgroundColor: props.theme.colors.guidance.info[1],
      color: props.theme.colors.guidance.info[0],
      fill: props.theme.colors.guidance.info[0],
    },
    question: {
      backgroundColor: props.theme.colors.purples[8],
      color: props.theme.colors.purples[0],
      fill: props.theme.colors.purples[0],
    },
    success: {
      backgroundColor: props.theme.colors.guidance.success[1],
      color: props.theme.colors.guidance.success[0],
      fill: props.theme.colors.guidance.success[0],
    },
    warning: {
      backgroundColor: props.theme.colors.guidance.warning[1],
      color: props.theme.colors.guidance.warning[0],
      fill: props.theme.colors.guidance.warning[0],
    },
    error: {
      backgroundColor: props.theme.colors.guidance.error[1],
      color: props.theme.colors.guidance.error[0],
      fill: props.theme.colors.guidance.error[0],
    },
    neutral: {
      backgroundColor: props.theme.colors.background,
      color: props.theme.colors.foreground,
      fill: props.theme.colors.foreground,
    },
    dark: {
      backgroundColor: props.theme.colors.grayscale[3],
      color: props.theme.colors.white,
      fill: props.theme.colors.white,
    },
  };

  return variants[props.variant];
};

export interface IMessageProps {
  variant?: "info" | "question" | "success" | "warning" | "error" | "neutral" | "dark";
  glyph?: React.ReactNode;
}

export type MessageProps =
  IMessageProps &
  BoxProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Message: React.FunctionComponent<MessageProps & { children?: React.ReactNode } & any> = forwardRef<HTMLDivElement, MessageProps>(
  ({ children, variant, glyph, ...props }, ref) => { 
  return (
    <Box
      aria-live={variant === "error" || variant === "warning"
        ? "assertive"
        : "polite"}
      role="alert"
      ref={ref}
      css={(theme: any) => ({
        ...variantColour({ theme, variant }),
        "> svg": {
          marginRight: theme.space[3],
        },
      })}
      {...props}>
      {glyph}
      <Box
        flex={1}
        color="inherit"
        bg="inherit"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="flex-start"
      >
        {children}
      </Box>
    </Box>
  );
});

Message.displayName = "Message";

Message.defaultProps = {
  fontSize: 1,
  p: 3,
  borderRadius: 3,
  flex: "1",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  variant: "neutral",
};
