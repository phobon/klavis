/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';

import { Box, Heading, BoxProps } from '@phobon/base';

export interface IPageHeaderProps {
  heading?: string;
  tagLine?: React.ReactNode;
  actions?: React.ReactNode;
}

export type PageHeaderProps = IPageHeaderProps & BoxProps;

export const PageHeader: React.FunctionComponent<PageHeaderProps & { children?: React.ReactNode } & any> = forwardRef(({ heading, tagLine, actions, children, ...props }, ref) => (
  <Box ref={ref} fullWidth flexDirection="column" alignItems="flex-start" {...props}>
    {tagLine}

    <Box fullWidth justifyContent="space-between" mb={children && 2} alignItems="flex-start">
      <Heading.H3>{heading}</Heading.H3>
      {actions}
    </Box>

    {children}
  </Box>
));

PageHeader.displayName = 'PageHeader';

PageHeader.defaultProps = {
  px: 3,
  py: 3,
};