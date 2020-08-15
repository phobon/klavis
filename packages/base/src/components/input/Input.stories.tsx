import React from 'react';

import { Stack } from '../containers';
import { Input } from './Input';

export default {
  component: Input,
  title: 'Input/Input',
};

export const withDifferentPaddings = () => (
  <Stack width={1 / 2} flexDirection="column" alignItems="flex-start" space={3}>
    <Input mb={3} placeholder="default width" />
    <Input mb={3} fullWidth placeholder="fullWidth" />
    <Input mb={3} width={1 / 2} placeholder="width: 1/2" />
    <Input width={400} placeholder="width: 400px" />
  </Stack>
);

export const withDifferentStates = () => (
  <Stack width={1 / 2} flexDirection="column" alignItems="flex-start" space={3}>
    <Input mb={3} placeholder="invalid" invalid />
    <Input mb={3} fullWidth placeholder="disabled" disabled />
  </Stack>
);

export const withDifferentVariants = () => {
  const variants: ('text' | 'number' | 'password')[] = ['text', 'number', 'password'];
  return (
    <Stack width={1 / 2} flexDirection="column" alignItems="flex-start" space={3}>
      {variants.map(v => (
        <Input key={v} placeholder={v} variant={v} />
      ))}
    </Stack>
  );
};

export const withAndWithoutHidingBrowserChrome = () => (
  <Stack flexDirection="column" alignItems="flex-start" space={3}>
    <Input value={0} id="1" variant="number" />
    <Input value={0} id="2" hideBrowserChrome />
  </Stack>
);