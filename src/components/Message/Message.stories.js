import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Truncate, Text } from '@phobon/base';

import AlertDiamond from '../../icons/AlertDiamond';
import AlertTriangle from '../../icons/AlertTriangle';
import QuestionCircle from '../../icons/QuestionCircle';
import CheckCircle from '../../icons/CheckCircle';

import Message from './Message';

const variations = [
  'Info', 'Question', 'Success', 'Warning', 'Error', 'Neutral', 'Dark',
];
const glyphs = {
  neutral: <QuestionCircle color="inherit" size={20} />,
  dark: <QuestionCircle color="inherit" size={20} />,
  info: <QuestionCircle color="inherit" size={20} />,
  question: <QuestionCircle color="inherit" size={20} />,
  success: <CheckCircle color="inherit" size={20} />,
  warning: <AlertTriangle color="inherit" size={20} />,
  error: <AlertDiamond color="inherit" size={20} />,
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
