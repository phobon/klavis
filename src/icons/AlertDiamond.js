/* eslint-disable react/prop-types */
import React from 'react'

const AlertDiamond = ({
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
    <path d='M12,16.5c-0.207,0-0.375,0.168-0.375,0.375S11.793,17.25,12,17.25s0.375-0.168,0.375-0.375 S12.207,16.5,12,16.5L12,16.5 M12,13.5V6 M1.28,13.281c-0.707-0.707-0.707-1.854,0-2.561l9.44-9.439 c0.705-0.707,1.85-0.708,2.557-0.003c0.001,0.001,0.002,0.002,0.003,0.003l9.44,9.439c0.707,0.707,0.707,1.854,0,2.561l-9.44,9.439 c-0.707,0.706-1.853,0.706-2.56,0L1.28,13.281z' />
  </svg>
)

AlertDiamond.displayName = 'AlertDiamond';

AlertDiamond.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default AlertDiamond