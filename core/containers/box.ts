import styled, { css } from "styled-components";
import { space, color, width, fontSize, alignItems, justifyContent, flexDirection, flex, flexWrap, borderRadius, fontWeight,
    SpaceProps, ColorProps, WidthProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, FlexWrapProps, FontSizeProps, BorderRadiusProps, FontWeightProps } from "styled-system";
import styledTs from "styled-components-ts";
import * as React from "react";

import { IBoxProps } from "./models";

const truncate = (): any => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export type BoxProps = 
    IBoxProps
    & SpaceProps 
    & ColorProps 
    & WidthProps 
    & AlignItemsProps 
    & JustifyContentProps 
    & FlexDirectionProps 
    & FlexWrapProps 
    & FontSizeProps
    & FontWeightProps
    & BorderRadiusProps;

const Box = styledTs<BoxProps>(styled.div)`
    display: flex;
    flex: none;

    ${width}
    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}

    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${flexWrap}

    ${borderRadius}

    width: ${props => props.fullWidth ? "100%" : width(props) };
    height: ${props => props.fullHeight ? "100%" : "" };

    border-radius: ${props => props.round ? "100%" : borderRadius(props.borderRadius)};

    overflow: ${props => props.hideOverflow ? "hidden": "" };
    ${props => props.truncate ? truncate() : "" }
`;

Box.defaultProps = {
    align: "center",
    justify: "center",
    width: "",
    borderRadius: 0,
    fontSize: 1,
    fontWeight: "normal"
}

export default Box;