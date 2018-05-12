import styled from "styled-components";
import styledTs from "styled-components-ts";
import { 
    color, 
    space, 
    width, 
    height,
    borderRadius, 
    ColorProps, 
    SpaceProps, 
    WidthProps,
    HeightProps,
    BorderRadiusProps
} from "styled-system";

interface IImageProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
    round?: boolean;
}

type ImageProps =
    IImageProps
    & ColorProps
    & SpaceProps
    & WidthProps
    & HeightProps
    & BorderRadiusProps;

const Image = styledTs<ImageProps>(styled.img)`
    ${color}
    ${space}
    ${width}
    ${height}
    ${borderRadius}

    width: ${props => props.fullWidth ? "100%" : width(props.width)};
    height: ${props => props.fullHeight ? "100%" : ""};
    
    border-radius: ${props => props.round ? "100%" : borderRadius(props.borderRadius)};
`;

Image.defaultProps = {
    width: "",
    borderRadius: 0
}

export default Image;