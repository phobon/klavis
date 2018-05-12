import styled from "styled-components";
import styledTs from "styled-components-ts";
import { space, color, SpaceProps, ColorProps } from "styled-system";

type LinkProps = SpaceProps & ColorProps;

const Link = styledTs<LinkProps>(styled.a)`
    ${space}
    ${color}

    text-decoration: none;

    &:hover {
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
    }
`;

export default Link;