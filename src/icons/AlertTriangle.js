import React from 'react'

const AlertTriangle = ({
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
    <path d='M12,18.75c-0.207,0-0.375,0.168-0.375,0.375S11.793,19.5,12,19.5s0.375-0.168,0.375-0.375 S12.207,18.75,12,18.75L12,18.75 M12,15.75v-7.5 M13.621,1.76c-0.44-0.895-1.522-1.265-2.417-0.825 c-0.359,0.176-0.649,0.466-0.825,0.825L0.906,21.058c-0.371,0.754-0.06,1.665,0.694,2.036c0.209,0.103,0.439,0.156,0.672,0.156 h19.456c0.84,0.001,1.521-0.68,1.522-1.52c0-0.233-0.053-0.463-0.156-0.672L13.621,1.76z' />
  </svg>
)

AlertTriangle.displayName = 'AlertTriangle'

AlertTriangle.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default AlertTriangle