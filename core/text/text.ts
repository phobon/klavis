import styled from "styled-components";
import styledTs from "styled-components-ts";
import { space, color, fontSize, fontWeight, textAlign, SpaceProps, ColorProps, FontSizeProps, FontWeightProps, TextAlignProps } from "styled-system";

interface ITextProps {
    caps?: boolean;
    subtle?: boolean;
}

type TextProps =
    ITextProps
    & SpaceProps
    & ColorProps
    & FontSizeProps
    & FontWeightProps
    & TextAlignProps

const Text =  styledTs<TextProps>(styled.div)`
    display: inline-flex;
    flex: none;
    line-height: 1.1em;

    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}
    ${textAlign}

    text-transform: ${props => props.caps ? "uppercase" : ""};
    letter-spacing: ${props => props.caps ? "0.15rem" : ""};
`;

Text.defaultProps = {
    color: "foreground",
    fontSize: 1,
    fontWeight: "normal",
    m: 0,
    caps: false,
    subtle: false
}

export default Text;