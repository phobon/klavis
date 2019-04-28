import React from 'react'

const QuestionCircle = ({
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
    <path d='M9,9c0-1.657,1.344-3,3.001-2.999c1.657,0,3,1.344,2.999,3.001c0,1.271-0.802,2.404-2,2.828 c-0.6,0.212-1,0.779-1,1.415v1.006 M12,17.25c-0.207,0-0.375,0.168-0.375,0.375S11.793,18,12,18s0.375-0.168,0.375-0.375 S12.207,17.25,12,17.25L12,17.25 M12,0.75c6.213,0,11.25,5.037,11.25,11.25S18.213,23.25,12,23.25S0.75,18.213,0.75,12 S5.787,0.75,12,0.75z' />
  </svg>
)

QuestionCircle.displayName = 'QuestionCircle'

QuestionCircle.defaultProps = {
  size: 24,
  color: 'currentcolor'
}

export default QuestionCircle