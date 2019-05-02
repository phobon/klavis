/* eslint-disable react/prop-types */
import React from 'react'

const User = ({
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
    <path d='M12,0.75c2.899,0,5.25,2.351,5.25,5.25s-2.351,5.25-5.25,5.25S6.75,8.899,6.75,6S9.101,0.75,12,0.75z M2.25,23.25c0-5.385,4.365-9.75,9.75-9.75s9.75,4.365,9.75,9.75' />
  </svg>
);

User.displayName = 'User';

User.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default User