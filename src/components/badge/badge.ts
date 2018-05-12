import styled from "styled-components";
import styledTs from "styled-components-ts";
import { color, space, SpaceProps, ColorProps } from "styled-system";

type BadgeProps = SpaceProps & ColorProps;

const Badge = styledTs<BadgeProps>(styled.div)`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    ${color}
    ${space}

    padding: 0.5rem 1rem;
    border-radius: 1rem;

    opacity: 0.8;
    transition: opacity 180ms ease-out;

    font-size: ${props => props.theme.fontSizes[0]}px;
    text-transform: uppercase;

    &:hover {
        opacity: 1;
    }
`;

Badge.defaultProps = {
    bg: "grayscale.4",
    color: "grayscale.1"
};

export default Badge;