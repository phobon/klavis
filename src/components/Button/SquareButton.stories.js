import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SquareButton from './SquareButton';

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean'];

const buttonSizes = [
  's',
  'm',
  'l',
];

const borderColors = ['grayscale.1', 'grayscale.2', 'grayscale.3', 'grayscale.4', 'grayscale.5'];

storiesOf('Components/Buttons/SquareButton', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')}></SquareButton>)
  ))
  .add('disabled', () => (
    buttonVariants.map(a =>
      <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} disabled></SquareButton>)
  ))
  .add('toggled', () => (
    buttonVariants.map(a =>
      <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled></SquareButton>)
  ))
  .add('Different sizes', () => (
    buttonSizes.map(s =>
      <SquareButton key={s} mr={2} mb={2} size={s} onClick={action('clicked')}></SquareButton>
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!"></SquareButton>)
  ));
