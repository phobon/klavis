import React from 'react'

const InformationCircle = ({
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
    <path d='M14.25,16.5H13.5c-0.828,0-1.5-0.672-1.5-1.5v-3.75c0-0.414-0.336-0.75-0.75-0.75H10.5 M11.625,6.75 c-0.207,0-0.375,0.168-0.375,0.375S11.418,7.5,11.625,7.5S12,7.332,12,7.125S11.832,6.75,11.625,6.75L11.625,6.75 M12,0.75 c6.213,0,11.25,5.037,11.25,11.25S18.213,23.25,12,23.25S0.75,18.213,0.75,12S5.787,0.75,12,0.75z' />
  </svg>
)

InformationCircle.displayName = 'InformationCircle'

InformationCircle.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default InformationCircle