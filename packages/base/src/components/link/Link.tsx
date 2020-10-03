import React from "react";
import styled from "@emotion/styled";

import { Text, TextProps } from "../typography/Text";

export interface ILinkProps {
  href?: string;
  clean?: boolean;
  active?: boolean;
}
export type LinkProps = ILinkProps & TextProps;
const StyledLink = styled(Text)<LinkProps>(({ clean, theme }) => ({
  textDecoration: clean ? "none" : "underline dashed",
  position: "relative",
  borderRadius: theme.radii[3],
  "&:hover": {
    color: theme.colors.accent[3],
    textDecoration: "underline",
  },
  "&:visited, &:focus": {
    textDecoration: "none",
  },
}));

export const Link = ({ children, ...props }) => (
  <StyledLink as="a" {...props}>
    {children}
  </StyledLink>
);

Link.displayName = "Link";

const defaultProps: any = {
  color: "accent.1",
  fontSize: 1,
  textAlign: "left",
  active: false,
};
Link.defaultProps = defaultProps;
