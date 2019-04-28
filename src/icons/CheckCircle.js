import React from 'react'

const CheckCircle = ({
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
    <path d='M6,13.223L8.45,16.7c0.322,0.481,0.974,0.61,1.455,0.288c0.096-0.065,0.182-0.145,0.252-0.237L18,6.828 M12,0.749c6.213,0,11.25,5.037,11.25,11.25S18.213,23.249,12,23.249S0.75,18.212,0.75,11.999S5.787,0.749,12,0.749z' />
  </svg>
)

CheckCircle.displayName = 'CheckCircle'

CheckCircle.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default CheckCircle