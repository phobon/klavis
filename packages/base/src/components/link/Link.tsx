import styled from "@emotion/styled";

import {
  TypographyProps,
  typographyStyles,
  typographySystem,
} from "../typography/typographyProps";

import { focus } from "../../utils";

export interface ILinkProps {
  href?: string;
  clean?: boolean;
  active?: boolean;
}

export type LinkProps = ILinkProps & TypographyProps;

export const Link = styled("a")<LinkProps>(
  (props: any) => ({
    textDecoration: props.clean ? "none" : "underline dashed",
    position: "relative",
    borderRadius: props.theme.radii[3],
    "&:hover": {
      color: props.theme.colors.accent[3],
      textDecoration: "underline",
    },
    "&:visited, &:focus": {
      textDecoration: "none",
    },
  }),
  typographyStyles,
  typographySystem,
  focus
);

Link.displayName = "Link";

Link.defaultProps = {
  color: "accent.1",
  fontSize: 1,
  textAlign: "left",
  active: false,
};
