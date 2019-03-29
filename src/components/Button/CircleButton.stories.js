import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CircleButton from './CircleButton';

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean'];

const buttonSizes = [
  's',
  'm',
  'l',
];

const borderColors = ['grayscale.1', 'grayscale.2', 'grayscale.3', 'grayscale.4', 'grayscale.5'];

storiesOf('Components/Buttons/CircleButton', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')}></CircleButton>)
  ))
  .add('isDisabled', () => (
    buttonVariants.map(a =>
      <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} isDisabled></CircleButton>)
  ))
  .add('toggled', () => (
    buttonVariants.map(a =>
      <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled></CircleButton>)
  ))
  .add('Different sizes', () => (
    buttonSizes.map(s =>
      <CircleButton key={s} mr={2} mb={2} size={s} onClick={action('clicked')}></CircleButton>
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!"></CircleButton>)
  ));
