import React from 'react';

import { Box } from './Box';
import { Grid } from './Grid';
import { Stack } from './Stack';
import { Scrollable } from './Scrollable';

export default {
  component: Scrollable,
  title: 'Containers/Scrollable',
};

const generatedItems = (height: number | string = 100, width: number | string = '100%', colour = 'purples', prefix = 'scrollable') => {
  const items = [];
  let counter = 2;
  let increment = true;
  for (let i = 0; i < 15; i++) {
    items.push(<Box key={`${prefix}__${i}`} height={height} width={width} bg={`${colour}.${counter}`}>{`Box ${i}`}</Box>);
    if (increment) {
      counter++;
      if (counter === 4) {
        increment = !increment;
      }
    } else {
      counter--;
      if (counter === 2) {
        increment = !increment;
      }
    }
  }

  return items;
};

const colours = [
  'reds.5', 'oranges.7', 'goldenrod', 'green',
];

export const withVerticalScrolling = () => (
  <Scrollable width={1 / 3} height={450}>
    {generatedItems()}
  </Scrollable>
);

export const withHorizontalScrolling = () => (
  <Scrollable width={2 / 3} height={150} scrollDirection="horizontal">
    {generatedItems('100%', 100, 'reds')}
  </Scrollable>
);

export const withFlexibility = () => (
  <Stack width={350} height={400}>
    <Box fullWidth bg="oranges.7" height={200} />
    <Scrollable fullWidth flex={1}>
      {generatedItems()}
    </Scrollable>
  </Stack>
);

export const withGridContainer = () => (
  <Grid width={350} height={400} gridTemplateColumns="100px 250px" gridTemplateRows="1fr">
    <Box bg="reds.7" fullWidth fullHeight />
    <Scrollable fullWidth fullHeight>
      {generatedItems()}
    </Scrollable>
  </Grid>
);

export const withInternalPadding = () => (
  <Scrollable width={350} height={400} px={5} pt={5} bg="grayscale.7">
    {generatedItems()}
  </Scrollable>
);

export const withMinimallyStyledScrollbar = () => (
  <Scrollable minimal width={1 / 3} height={450}>
    {generatedItems()}
  </Scrollable>
);

export const withDifferentMinimallyStyledScrollbarColours = () => (
  <Stack flexDirection="row" space={3}>
    {colours.map(c => (
      <Scrollable width={150} key={c} height={450} minimal scrollbarColor={c}>
        {generatedItems(100, '100%', 'grayscale', c)}
      </Scrollable>
    ))}
  </Stack>
);
