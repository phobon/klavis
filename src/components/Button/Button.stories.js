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

storiesOf('Components/Buttons/Button', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')}>{a}</Button>)
  ))
  .add('With a disabled state', () => (
    buttonVariants.map(a =>
      <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} disabled>{a}</Button>)
  ))
  .add('With a toggled state', () => (
    buttonVariants.map(a =>
      <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled>{a}</Button>)
  ))
  .add('With different sizes', () => (
    buttonSizes.map(s =>
      <Button key={s} mr={2} mb={2} size={s} onClick={action('clicked')}>{`size: ${s}`}</Button>
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!">{a}</Button>)
  ));
