import styled from "styled-components";
import styledTs from "styled-components-ts";
import { 
    color, 
    space, 
    width, 
    height,
    ColorProps, 
    SpaceProps, 
    WidthProps,
    HeightProps
} from "styled-system";
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
    & WidthProps
    & HeightProps;

const Vector = styledTs<VectorProps>(styled.svg)`
    ${color}
    ${space}
    ${width}
    ${height}

    width: ${props => props.fullWidth ? "100%" : width(props.width)};
    height: ${props => props.fullHeight ? "100%" : ""};
`;

Vector.defaultProps = {
    width: "",
    height: ""
}

export default Vector;