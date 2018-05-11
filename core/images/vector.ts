import styled from "styled-components";
import styledTs from "styled-components-ts";
import { color, space, width, ColorProps, SpaceProps, WidthProps } from "styled-system";
import { SVGProps } from "react";

interface IVectorProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export type VectorProps =
    IVectorProps
    & SVGProps<any>
    & ColorProps
    & SpaceProps
    & WidthProps;

const Vector = styledTs<VectorProps>(styled.svg)`
    ${color}
    ${space}
    ${width}

    width: ${props => props.fullWidth ? "100%" : width(props.width)};
    height: ${props => props.fullHeight ? "100%" : ""};
`;

Vector.defaultProps = {
    width: ""
}

export default Vector;