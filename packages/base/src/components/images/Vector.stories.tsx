import React from 'react';

import { Vector } from './Vector';
import { Stack } from '../containers';

export default {
  component: Vector,
  title: 'Images/Vector',
};

export const withSvgShapes = () => (
  <Stack space={3}>
    <Vector width={96} height={91} viewBox="0 0 96 91" fill="none">
      <path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" fill="#6FCF97" />
    </Vector>

    <Vector width={100} height={100}>
      <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="tomato" />
    </Vector>
  </Stack>
);

export const withDifferentColors = () => {
  const colours = ['oranges.7', 'purples.7', 'greens.7'];
  return (
    <Stack space={3}>
      {colours.map(c => (
        <Vector key={`fill_${c}`} width={50} viewBox="0 0 96 91" fill={c}>
          <path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" />
        </Vector>
      ))}

      {colours.map(c => (
        <Vector key={`stroke_${c}`} width={50} viewBox="0 0 96 91" stroke={c} fill="none">
          <path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" />
        </Vector>
      ))}
    </Stack>
  );
};
