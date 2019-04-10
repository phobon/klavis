import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CircleButton from './CircleButton';

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'link', 'clean'];

const buttonSizes = ['s', 'm', 'l'];

storiesOf('Components/Buttons/CircleButton', module)
  .add('With different variants', () => (
    buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} />)
  ))
  .add('isDisabled', () => (
    buttonVariants.map(a =>
      <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} isDisabled />)
  ))
  .add('toggled', () => (
    buttonVariants.map(a =>
      <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled />)
  ))
  .add('Different sizes', () => (
    buttonSizes.map(s =>
      <CircleButton key={s} mr={2} mb={2} size={s} onClick={action('clicked')} />
    )
  ))
  .add('With tooltips', () => (
    buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!" />)
  ));
