import styled from 'styled-components';

import { Text, TextProps } from '../typography/Text';
import { focus } from '../../utils';

export interface ILinkProps {
  href?: string;
  clean?: boolean;
  active?: boolean;
}
export type LinkProps = ILinkProps & TextProps;
export const Link = styled(Text).attrs(() => ({ as: 'a' }))<LinkProps>(
  focus,
  ({ clean, theme }) => ({
    textDecoration: clean ? 'none' : 'underline dashed',
    position: 'relative',
    borderRadius: theme.radii[3],
    '&:hover': {
      color: theme.colors.accent[3],
      textDecoration: 'underline',
    },
    '&:visited, &:focus': {
      textDecoration: 'none',
    },
  }),
);

Link.displayName = 'Link';

const defaultProps: any = {
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false,
};
Link.defaultProps = defaultProps;
