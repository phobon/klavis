import styled from "@emotion/styled";
import { grid, GridProps as SystemGridProps } from 'styled-system';

import { Box, BoxProps } from './Box';

export type GridProps = BoxProps & SystemGridProps;

export const Grid = styled(Box)<GridProps>({
    display: 'grid',
  },
  grid,
);

Grid.displayName = 'Grid';

const defaultProps: any = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};
Grid.defaultProps = defaultProps;
