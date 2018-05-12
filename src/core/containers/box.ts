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
    Flexprops,
    AlignContentProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps,
    FlexWrapProps,
    FlexBasisProps,
    FontSizeProps,
    BorderRadiusProps,
    WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps,
    BordersProps,
    BorderColorProps
} from "styled-system";
import styledTs from "styled-components-ts";

import { IBoxProps } from "./models";

export type BoxProps = 
    IBoxProps
    & SpaceProps
    & ColorProps
    & AlignItemsProps
    & JustifyContentProps
    & FlexDirectionProps
    & Flexprops
    & AlignContentProps
    & JustifySelfProps
    & AlignSelfProps
    & OrderProps
    & FlexWrapProps
    & FlexBasisProps
    & FontSizeProps
    & BorderRadiusProps
    & WidthProps
    & MinWidthProps
    & MaxWidthProps
    & HeightProps
    & MinHeightProps
    & MaxHeightProps
    & BordersProps
    & BorderColorProps;

const Box = styledTs<BoxProps>(styled.div)`
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