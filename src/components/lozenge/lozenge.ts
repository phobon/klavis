import styled from "styled-components";
import styledTs from "styled-components-ts";
import { space, color, fontSize, borderRadius, SpaceProps, ColorProps, FontSizeProps, BorderRadiusProps } from "styled-system";

import { Box } from "../../core";

type LozengeProps = SpaceProps & ColorProps & FontSizeProps & BorderRadiusProps;

const Lozenge = styledTs<LozengeProps>(Box.extend)`
    ${space}
    ${fontSize}
    ${color}
    ${borderRadius}

    line-height: 1;
    opacity: 0.6;
    transition: opacity 180ms ease-out;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        opacity: 1;
    }
`;

Lozenge.defaultProps = {
    color: "white",
    bg: "grayscale.3",
    fontSize: 0,
    px: 2,
    py: 1,
    borderRadius: 3
};

export default Lozenge;