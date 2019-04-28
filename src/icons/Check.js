import React from 'react'

const Check = ({
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
    <path d='M23.25,0.749L8.158,22.308c-0.694,0.997-2.065,1.243-3.062,0.549c-0.194-0.135-0.365-0.301-0.507-0.49 L0.75,17.249' />
  </svg>
)

Check.displayName = 'Check'

Check.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default Check