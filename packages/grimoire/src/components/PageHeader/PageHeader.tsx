/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from "react";

import { Stack, Box, Heading, BoxProps, Text } from "@phobon/base";

export interface IPageHeaderProps {
  heading?: string;
  tagline?: string;
  actions?: React.ReactNode;
}

export type PageHeaderProps = IPageHeaderProps &
  BoxProps &
  React.HTMLAttributes<HTMLDivElement>;

export const PageHeader: React.FunctionComponent<PageHeaderProps> = forwardRef<
  HTMLDivElement,
  PageHeaderProps
>(({ heading, tagline, actions, children, ...props }, ref) => (
  <Stack
    ref={ref}
    fullWidth
    flexDirection="column"
    alignItems="flex-start"
    {...props}
  >
    {tagline && (
      <Text color="grayscale.4" fontSize={0}>
        {tagline}
      </Text>
    )}

    <Box
      fullWidth
      justifyContent="space-between"
      mb={children ? 2 : 0}
      alignItems="flex-start"
    >
      <Heading as="h3">{heading}</Heading>
      {actions}
    </Box>

    {children}
  </Stack>
));

PageHeader.displayName = "PageHeader";

PageHeader.defaultProps = {
  px: 3,
  py: 3,
};
