import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean'];

const buttonSizes = [
  's',
  'm',
  'l',
];

const borderColors = ['grayscale.1', 'grayscale.2', 'grayscale.3', 'grayscale.4', 'grayscale.5'];

storiesOf('Components/Buttons/Button', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')}>{a}</Button>)
  ))
  .add('isDisabled', () => (
    buttonVariants.map(a =>
      <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} isDisabled>{a}</Button>)
  ))
  .add('isToggled', () => (
    buttonVariants.map(a =>
      <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} isToggled>{a}</Button>)
  ))
  .add('Different sizes', () => (
    buttonSizes.map(s =>
      <Button key={s} mr={2} mb={2} size={s} onClick={action('clicked')}>{`size: ${s}`}</Button>
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!">{a}</Button>)
  ));
