import styled from "styled-components";
import { 
    color,
    space,
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
    gridGap,
    gridRowGap,
    gridColumnGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoRows,
    gridAutoColumns,
    gridTemplateRows,
    gridTemplateColumns,
    SpaceProps,
    ColorProps,
    FontSizeProps,
    BorderRadiusProps,
    WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps,
    BordersProps,
    BorderColorProps,
    GridGapProps,
    GridRowGapProps,
    GridColumnGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoRowsProps,
    GridAutoColumnsProps,
    GridTemplateRowsProps,
    GridTemplateColumnsProps
} from "styled-system";
import styledTs from "styled-components-ts";

import { IBoxProps } from "./models";

export type GridProps = 
    IBoxProps
    & SpaceProps
    & ColorProps
    & FontSizeProps
    & BorderRadiusProps
    & WidthProps
    & MinWidthProps
    & MaxWidthProps
    & HeightProps
    & MinHeightProps
    & MaxHeightProps
    & BordersProps
    & BorderColorProps
    & GridGapProps
    & GridRowGapProps
    & GridColumnGapProps
    & GridColumnProps
    & GridRowProps
    & GridAutoFlowProps
    & GridAutoRowsProps
    & GridAutoColumnsProps
    & GridTemplateRowsProps
    & GridTemplateColumnsProps;

const Grid = styledTs<GridProps>(styled.div)`
    display: grid;

    ${color}
    ${space}
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
    ${gridGap}
    ${gridRowGap}
    ${gridColumnGap}
    ${gridColumn}
    ${gridRow}
    ${gridAutoFlow}
    ${gridAutoRows}
    ${gridAutoColumns}
    ${gridTemplateRows}
    ${gridTemplateColumns}

    width: ${props => props.fullWidth ? "100%" : width(props) };
    height: ${props => props.fullHeight ? "100%" : "" };

    border-radius: ${props => props.round ? "100%" : borderRadius(props.borderRadius)};
`;

Grid.defaultProps = {
    width: "",
    borderRadius: 0,
    fontSize: 1,
    fontWeight: "normal"
}

export default Grid;