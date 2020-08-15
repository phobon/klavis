/* eslint-disable quotes */
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Input, InputProps } from './Input';
import { Box, BoxProps } from '../containers';
import { destructureLayoutProps } from '../../utils';

const SelectInput = styled(Input).attrs(() => ({ as: 'select' }))({
  '-webkit-appearance': 'none',
  minWidth: 150,
});

const SelectContainer = styled(Box)({
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    right: 4,
    width: 24,
    height: 24,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMinYMid' fill='hsl(216, 6%, 49%)' %3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/%3E%3C/svg%3E")`,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
    pointerEvents: 'none',
  },
});

export type SelectProps = InputProps & BoxProps;
export const Select: React.FunctionComponent<SelectProps> = forwardRef((props: SelectProps, ref: any) => {
  const [layoutProps, passthroughProps] = destructureLayoutProps(props);
  return (
    <SelectContainer {...layoutProps}>
      <SelectInput ref={ref} fullWidth {...passthroughProps} />
    </SelectContainer>
  );
});

Select.displayName = 'Select';
 