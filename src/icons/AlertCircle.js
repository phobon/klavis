import React from 'react'

const AlertCircle = ({
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
    <path d='M12,16.5c-0.207,0-0.375,0.168-0.375,0.375S11.793,17.25,12,17.25s0.375-0.168,0.375-0.375 S12.207,16.5,12,16.5L12,16.5 M12,13.5V5.25 M12,0.75c6.213,0,11.25,5.037,11.25,11.25S18.213,23.25,12,23.25S0.75,18.213,0.75,12 S5.787,0.75,12,0.75z' />
  </svg>
)

AlertCircle.displayName = 'AlertCircle'

AlertCircle.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default AlertCircle