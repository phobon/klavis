/* eslint-disable react/no-array-index-key */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  width,
  SpaceProps,
  LayoutProps,
  WidthProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { gridPosition, GridPositionProps, DensityType } from '../../utils';

const density = (props: any) => {
  const densityValues = {
    compact: 1,
    normal: 2,
    spacious: 3,
  };

  const d = densityValues[props.density];

  return css`
    thead {
      th {
        padding-top: ${props.theme.space[d]}px;
        padding-bottom: ${props.theme.space[d]}px;
      }
    }

    tbody {
      tr {
        td {
          padding-top: ${props.theme.space[d]}px;
          padding-bottom: ${props.theme.space[d]}px;
          padding-right: ${props.theme.space[props.horizontalCellPadding]}px;
        }

        &:first-child {
          td { 
            padding-top: ${props.theme.space[d]}px;
          }
        }

        &:last-child {
          td {
            border-bottom: 0;
            padding-bottom: ${props.theme.space[d]}px;
          }
        }
      }
    }
  `;
};

const showSeparator = (props: any) => props.showSeparator ? css`
  border-bottom: 1px dashed ${props.theme.colors.grayscale[7]};
`: css`
  border-bottom: 1px solid transparent;
`;

const tableSystem = compose(space, layout, width, gridPosition);

interface IColumn {
  fill?: boolean;
  truncate?: boolean;
  lines?: number;
  variant?: 'numeric' | 'other';
  label?: string;
}
type Column = IColumn & SpaceProps & WidthProps;

interface IRow {
  id?: string | number;
  cells: { content: React.ReactNode }[];
  disabled?: boolean;
}

export interface ITableProps {
  id?: string | number;
  columns: IColumn[];
  rows: IRow[];
  horizontalCellPadding?: number;
  showSeparator?: boolean;
  density?: DensityType;
}
export type TableProps =
  ITableProps
  & SpaceProps
  & LayoutProps
  & WidthProps
  & GridPositionProps;

type StyledTableProps = SpaceProps & LayoutProps & WidthProps & GridPositionProps;
const StyledTable = styled('table').withConfig({ shouldForwardProp })<StyledTableProps & any>`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  color: ${props => props.theme.colors.foreground};
  box-sizing: border-box;
  border-bottom: 2px solid ${props => props.theme.colors.grayscale[7]};

  ${tableSystem}
  ${gridPosition}
  
  th, td {
    vertical-align: top;
    text-align: left;
    box-sizing: border-box;

    &:last-child {
      padding-right: 0;
    }

    &.cell--numeric {
      text-align: right;
    }

    &.cell--fill {
      width: 100%;
    }

    &.cell--truncate {
      position: relative;

      > * {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }

    &.cell--disabled {
      opacity: 0.3;
    }
  }

  thead {
    th {
      font-size: ${props => props.theme.fontSizes[1]}px;
      color: ${props => props.theme.colors.grayscale[2]};
      font-weight: ${props => props.theme.fontWeights.normal};
      white-space: pre;
      background-color: ${props => props.theme.colors.grayscale[8]};

      padding-right: ${props => props.theme.space[3]}px;

      border-bottom: 2px solid ${props => props.theme.colors.grayscale[7]};

      &:first-child {
        padding-left: ${props => props.theme.space[3]}px;
        border-radius: ${props => props.theme.radii[3]}px 0 0 0;
      }

      &:last-child {
        padding-right: ${props => props.theme.space[3]}px;
        border-radius: 0 ${props => props.theme.radii[3]}px 0 0;
      }
    }
  }

  tbody {
    tr {
      td {
        text-align: left;

        ${showSeparator}

        &:first-child {
          padding-left: ${props => props.theme.space[3]}px;
        }

        &:last-child {
          padding-right: ${props => props.theme.space[3]}px;
        }
      }
    }
  }

  ${density}
`;

const colSystem = compose(width, space);
const Col = styled('col')<Column>(
  colSystem,
);

const Td = styled('td')<{ lines?: number }>(
  ({ lines }: any) => ({
    '&.cell--truncate': {
      '> *': {
        '-webkit-line-clamp': lines ?? '1',
      },
    },
  })
)

export const Table: React.FunctionComponent<TableProps> = forwardRef(({ id, columns, rows, ...props }: TableProps, ref: any) => {  
  const cols = columns.map(({ fill, truncate, ...rest }, i) => (
    <Col key={`${id}__col__${i}`} {...rest} />
  ));

  const header = columns.map((c, i) => (
    <th
      key={`${id}__header__${i}`}
      className={`${c.variant === 'numeric' ? 'cell--numeric' : ''}`}>
      {c.label}
    </th>
  ));

  const rowItems = rows.map((r, rowIndex) => {
    const cells = r.cells.map((c, cellIndex) => {
      const columnCell = columns[cellIndex];
      if (!columnCell) {
        throw Error(`Cell at index: ${cellIndex} is not found.`);
      }

      const { fill, truncate, lines, ...rest } = columns[cellIndex];
      const cell = 
        `${fill ? 'cell--fill' : ''} 
        ${truncate ? 'cell--truncate': ''} 
        ${r.disabled ? 'cell--disabled': ''}`;
      return (
        <Td key={`${r.id}-cell__${cellIndex}`} className={cell} lines={lines} style={rest as any}>
          <span>{c.content}</span>
        </Td>
      );
    });

    return (
      <tr key={`${r.id}-row__${rowIndex}`}>
        {cells}
      </tr>
    )
  });

  return (
    <StyledTable ref={ref} {...props}>
      <colgroup>
        {cols}
      </colgroup>
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
      <tbody>
        {rowItems}
      </tbody>
    </StyledTable>
  );
});

Table.displayName = 'Table';

const defaultProps: any = {
  id: Math.random() * 100,
  showSeparator: true,
  horizontalCellPadding: 5,
  columns: null,
  rows: null,
  density: 'normal',
};
Table.defaultProps = defaultProps;