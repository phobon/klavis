import React from 'react';

import { Table } from './Table';

import { Box } from '../containers';
import { Heading } from '../typography';

export default {
  component: Table,
  title: 'Table',
};

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sodales lectus.';

const row1 = [
  { content: 'cell 1' },
  { content: longText },
  { content: 'cell 3' },
];
const row2 = [
  { content: 'cell 1' },
  { content: longText },
  { content: longText },
];

export const withWrappingText = () => {
  const columnData = [
    { label: 'Column 1' },
    { label: 'Column 2', truncate: false  },
    { label: 'Column 3' },
  ];

  const rows = [];
  for (let i = 0; i < 3; i += 1) {
    rows.push({ cells: [...row1] });
  }

  return (
    <Table
      columns={columnData}
      rows={rows} />
  );
};

export const withTruncatedText = () => {
  const firstColumnData = [
    { label: 'Column 1' },
    { label: 'Column 2', truncate: true, fill: true, lines: 2 },
    { label: 'Column 3' },
  ];

  const firstRows = [];
  for (let i = 0; i < 3; i += 1) {
    firstRows.push({ cells: row1 });
  }

  const secondColumnData = [
    { label: 'Column 1' },
    { label: 'Column 2', truncate: true },
    { label: 'Column 3', truncate: true, fill: true },
  ];
  const secondRows = [];
  for (let i = 0; i < 3; i += 1) {
    secondRows.push({ cells: row2 });
  }

  return (
    <Box flexDirection="column" fullWidth>
      <Table
        columns={firstColumnData}
        rows={firstRows} />

      <Table
        mt={5}
        columns={secondColumnData}
        rows={secondRows} />
    </Box>
  );
};

export const withDifferentInformationDensities = () => {
  const firstColumnData = [
    { label: 'Column 1' },
    { label: 'Column 2', truncate: true, fill: true },
    { label: 'Column 3' },
  ];

  const firstRows = [];
  for (let i = 0; i < 3; i += 1) {
    firstRows.push({ cells: row1 });
  }

  return (
    <Box flexDirection="column" fullWidth alignItems="flex-start">
      <Heading as="h6" mb={3}>Compact density</Heading>
      <Table
        mb={6}
        density="compact"
        columns={firstColumnData}
        rows={firstRows} />

      <Heading as="h6" mb={3}>Normal density</Heading>
      <Table
        mb={6}
        columns={firstColumnData}
        rows={firstRows} />

      <Heading as="h6" mb={3}>Spacious density</Heading>
      <Table
        density="spacious"
        columns={firstColumnData}
        rows={firstRows} />
    </Box>
  );
};

export const withNumericColumns = () => {
  const columnData = [
    { label: 'Column 1' },
    { label: 'Column 2', truncate: true, fill: true },
    { label: 'Column 3' },
    { label: 'Column 4', textAlign: 'right' },
  ];

  const rows = [];
  for (let i = 0; i < 3; i += 1) {
    rows.push({ cells: [...row1, { content: 25 }]});
  }

  return (
    <Table
      columns={columnData}
      rows={rows} />
  );
};

export const withDifferentColumnWidths = () => {
  const columnData = [
    { label: 'Column 1', minWidth: 300 },
    { label: 'Column 2' },
    { label: 'Column 3', fill: true, truncate: true },
    { label: 'Column 4', width: 50, truncate: true },
  ];

  const rows = [];
  for (let i = 0; i < 3; i += 1) {
    rows.push({
      cells: [
        { content: 'cell 1 content' },
        { content: 'cell 2 content' },
        { content: longText },
        { content: 'cell 4 content' },
      ],
    });
  }

  return (
    <Table
      columns={columnData}
      rows={rows} />
  );
};
