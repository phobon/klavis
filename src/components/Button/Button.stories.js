import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  component: Button,
  title: 'Components/Buttons/Button',
};

const buttonVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'link', 'clean'];

const buttonSizes = [
  's',
  'm',
  'l',
];

export const withDifferentVariants = () => (
  buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')}>{a}</Button>)
);

export const withADisabledState = () => (
  buttonVariants.map(a =>
    <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} disabled>{a}</Button>)
);

export const withAToggledState = () => (
  buttonVariants.map(a =>
    <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} toggled>{a}</Button>)
);

export const withDifferentSizes = () => (
  buttonSizes.map(s => <Button key={s} mr={2} mb={2} size={s} onClick={action('clicked')}>{`size: ${s}`}</Button>)
);

export const withTooltips = () => (
  buttonVariants.map(a => <Button key={a} variant={a} mr={2} mb={2} onClick={action('clicked')} tooltip="This is a tooltip!">{a}</Button>)
);
