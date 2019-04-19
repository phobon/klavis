import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SquareButton from './SquareButton';

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'link', 'clean'];

const buttonSizes = ['s', 'm', 'l'];

storiesOf('Components/Buttons/SquareButton', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} />)
  ))
  .add('With a disabled state', () => (
    buttonVariants.map(a =>
      <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} disabled />)
  ))
  .add('With a toggled state', () => (
    buttonVariants.map(a =>
      <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled />)
  ))
  .add('With different sizes', () => (
    buttonSizes.map(s =>
      <SquareButton key={s} mr={2} mb={2} size={s} onClick={action('clicked')} />
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <SquareButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!" />)
  ));
