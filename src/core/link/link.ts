import styled from "styled-components";
import { space, color, SpaceProps, ColorProps } from "styled-system";

type LinkProps = SpaceProps & ColorProps;

const Link = styled.a<LinkProps>`
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