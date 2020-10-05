/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';

import { Box, Heading, Text, BoxProps } from '@phobon/base';

export interface IPageHeaderProps {
  heading?: string;
  tagLine?: React.ReactNode | string;
  actions?: React.ReactNode;
}

export type PageHeaderProps = IPageHeaderProps & BoxProps;

export const PageHeader: React.FunctionComponent<PageHeaderProps & { children?: React.ReactNode } & any> = forwardRef(({ heading, tagLine, actions, children, ...props }, ref) => {
  let tagLineControl = null;
  if (tagLine) {
    tagLineControl = React.isValidElement(tagLine) ? tagLine : (
      <Text fontSize={0} color="grayscale.3">{tagLine}</Text>
    );
  }

  return (
    <Box ref={ref} fullWidth flexDirection="column" alignItems="flex-start" {...props}>
      {tagLineControl}

      <Box fullWidth justifyContent="space-between" mb={children && 2} alignItems="flex-start">
        <Heading.H3>{heading}</Heading.H3>
        {actions}
      </Box>

      {children}
    </Box>
  );
});

PageHeader.displayName = 'PageHeader';

PageHeader.defaultProps = {
  px: 3,
  py: 3,
};