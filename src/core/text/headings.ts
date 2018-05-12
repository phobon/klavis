import * as React from "react";
import styled from "styled-components";
import styledTs from "styled-components-ts";
import { 
    space, 
    color, 
    fontSize, 
    fontWeight,
    textAlign,
    lineHeight, 
    SpaceProps, 
    ColorProps, 
    FontSizeProps, 
    FontWeightProps,
    TextAlignProps,
    LineHeightProps
} from "styled-system";

export interface IHeadingProps {
    placeholder?: string;
}

type HeadingProps = 
    IHeadingProps
    & SpaceProps
    & ColorProps
    & FontSizeProps
    & FontWeightProps
    & TextAlignProps
    & LineHeightProps;

const defaults = {
    color: "grayscale.2",
    fontWeight: "normal",
    m: 0
};

const Heading1 = styledTs<HeadingProps>(styled.h1)`
    position: relative;
    
    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}

    &::before {
        content: "${props => props.placeholder && !props.children ? props.placeholder : ""}";
        color: ${props => props.theme.colors.grayscale[4]};
    }
`;
Heading1.defaultProps = Object.assign({}, { 
    fontSize: 7
}, defaults);

const Heading2 = Heading1.withComponent("h2");
Heading2.defaultProps = Object.assign({}, { fontSize: 6 }, defaults);

const Heading3 = Heading1.withComponent("h3");
Heading3.defaultProps = Object.assign({}, { fontSize: 5 }, defaults);

const Heading4 = Heading1.withComponent("h4");
Heading4.defaultProps = Object.assign({}, { fontSize: 4 }, defaults);

const Heading5 = Heading1.withComponent("h5");
Heading5.defaultProps = Object.assign({}, { fontSize: 3 }, defaults);

const Heading6 = Heading1.withComponent("h6");
Heading6.defaultProps = Object.assign({}, { fontSize: 2 }, defaults);

export {
    Heading1, Heading2, Heading3, Heading4, Heading5, Heading6
}