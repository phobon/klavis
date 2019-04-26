import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Truncate, Text } from '@phobon/base';

import Error from 'rmdi/lib/Error';
import Warning from 'rmdi/lib/Warning';
import Help from 'rmdi/lib/Help';
import CheckCircle from 'rmdi/lib/CheckCircle';

import Message from './Message';

const variations = [
  'Info', 'Question', 'Success', 'Warning', 'Error', 'Neutral', 'Dark',
];
const glyphs = {
  neutral: <Help color="inherit" size={20} />,
  dark: <Help color="inherit" size={20} />,
  info: <Help color="inherit" size={20} />,
  question: <Help color="inherit" size={20} />,
  success: <CheckCircle color="inherit" size={20} />,
  warning: <Warning color="inherit" size={20} />,
  error: <Error color="inherit" size={20} />,
};

storiesOf('Components/Message', module)
  .add('With different variations', () => variations.map(v => (
    <Message key={v} variation={v.toLowerCase()} mr={3}>{v}</Message>
  )))
  .add('With different glyphs', () => variations.map(v => (
    <Message key={v} variation={v.toLowerCase()} mr={3} glyph={glyphs[v.toLowerCase()]}>{v}</Message>
  )))
  .add('With composed children', () => (
    <Box flexDirection="column" alignItems="flex-start">
      {variations.map(v => (
        <Message variation={v.toLowerCase()} key={v} mb={3}>
          <Truncate fontWeight="bold" fontSize={2} mb={2} color="inherit">Message heading</Truncate>
          <Text color="inherit">Some text to go along with this message</Text>
        </Message>
      ))}
    </Box>
  ))
  .add('With composed children and glyphs', () => (
    <Box flexDirection="column" alignItems="flex-start">
      {variations.map(v => (
        <Message variation={v.toLowerCase()} key={v} mb={3} glyph={glyphs[v.toLowerCase()]}>
          <Truncate fontWeight="bold" fontSize={2} mb={2} color="inherit" lineHeight={2}>Message heading</Truncate>
          <Text color="inherit">Some text to go along with this message</Text>
        </Message>
      ))}
    </Box>
  ));
