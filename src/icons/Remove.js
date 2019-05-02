/* eslint-disable react/prop-types */
import React from 'react'

const Remove = ({
  size,
  color,
  ...props
}) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    stroke={color}
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d='M4.5,19.5l15-15 M4.5,4.5l15,15' />
  </svg>
)

Remove.displayName = 'Remove';

Remove.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default Remove