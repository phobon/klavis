import React from 'react';
import { action } from '@storybook/addon-actions';

import CircleButton from './CircleButton';

export default {
  component: CircleButton,
  title: 'Components/Buttons/CircleButton',
};

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'link', 'clean'];

const buttonSizes = ['s', 'm', 'l'];

export const withDifferentVariants = () => (
  buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} />)
);

export const withADisabledState = () => (
  buttonVariants.map(a =>
    <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} disabled />)
);

export const withAToggledState = () => (
  buttonVariants.map(a =>
    <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled />)
);

export const withDifferentSizes = () => (
  buttonSizes.map(s =>
    <CircleButton key={s} mr={2} mb={2} size={s} onClick={action('clicked')} />)
);

export const withTooltips = () => (
  buttonVariants.map(a => <CircleButton key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!" />)
);
