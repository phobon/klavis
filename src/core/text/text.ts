import styled from "styled-components";
import { 
    space,
    width,
    minWidth,
    maxWidth,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    SpaceProps,
    WidthProps,
    MinWidthProps,
    MaxWidthProps,
    ColorProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    TextAlignProps
} from "styled-system";

interface ITextProps {
    caps?: boolean;
    subtle?: boolean;
}

type TextProps =
    ITextProps
    & SpaceProps
    & WidthProps
    & MinWidthProps
    & MaxWidthProps
    & ColorProps
    & FontSizeProps
    & FontWeightProps
    & LineHeightProps
    & TextAlignProps;

const Text =  styled.div<TextProps>`
    display: inline-flex;
    flex: none;

    ${space}
    ${width}
    ${minWidth}
    ${maxWidth}
    ${color}
    ${fontSize}
    ${fontWeight}
    ${lineHeight}
    ${textAlign}

    text-transform: ${props => props.caps ? "uppercase" : ""};
    letter-spacing: ${props => props.caps ? "0.15rem" : ""};
`;

Text.defaultProps = {
    color: "foreground",
    fontSize: 1,
    fontWeight: "normal",
    lineHeight: "1.1em",
    m: 0,
    caps: false,
    subtle: false
};

export default Text;