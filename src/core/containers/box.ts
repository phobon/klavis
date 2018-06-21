import styled from "styled-components";
import { 
    color,
    space,
    alignItems,
    justifyContent,
    flexDirection,
    flex,
    alignContent,
    justifySelf,
    alignSelf,
    order,
    flexWrap,
    flexBasis,
    fontSize,
    fontWeight,
    borderRadius,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    borders,
    borderColor,
    SpaceProps,
    ColorProps,
    AlignItemsProps,
    JustifyContentProps,
    FlexDirectionProps,
    FlexProps,
    AlignContentProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps,
    FlexWrapProps,
    FlexBasisProps,
    FontSizeProps,
    FontWeightProps,
    BorderRadiusProps,
    WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps,
    BorderProps,
    BorderColorProps
} from "styled-system";

import { IBoxProps } from "./models";

export type BoxProps = 
    IBoxProps
    & SpaceProps
    & ColorProps
    & AlignItemsProps
    & JustifyContentProps
    & FlexDirectionProps
    & FlexProps
    & AlignContentProps
    & JustifySelfProps
    & AlignSelfProps
    & OrderProps
    & FlexWrapProps
    & FlexBasisProps
    & FontSizeProps
    & FontWeightProps
    & BorderRadiusProps
    & WidthProps
    & MinWidthProps
    & MaxWidthProps
    & HeightProps
    & MinHeightProps
    & MaxHeightProps
    & BorderProps
    & BorderColorProps;

const Box = styled.div<BoxProps>`
    display: flex;

    ${color}
    ${space}
    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${flex}
    ${alignContent}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${flexWrap}
    ${flexBasis}
    ${fontSize}
    ${borderRadius}
    ${width}
    ${minWidth}
    ${maxWidth}
    ${height}
    ${minHeight}
    ${maxHeight}
    ${borders}
    ${borderColor}

    width: ${props => props.fullWidth ? "100%" : width(props) };
    height: ${props => props.fullHeight ? "100%" : "" };

    border-radius: ${props => props.round ? "100%" : borderRadius(props.borderRadius)};
`;

Box.defaultProps = {
    flex: "none",
    align: "center",
    justify: "center",
    width: "",
    borderRadius: 0,
    fontSize: 1,
    fontWeight: "normal"
}

export default Box;