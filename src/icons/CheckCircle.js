/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { Vector } from '@phobon/base';

const CheckCircle = forwardRef((props, ref) => (
  <Vector
    ref={ref}
    {...props}
    viewBox="0 0 24 25">
    <path d="M6.61309 13.791C6.3745 13.4524 5.9066 13.3713 5.568 13.6099C5.2294 13.8485 5.14833 14.3164 5.38691 14.655L6.61309 13.791ZM8.45 17.7L9.07324 17.2828C9.06991 17.2778 9.06653 17.2729 9.06309 17.268L8.45 17.7ZM9.905 17.988L10.3222 18.6112L10.3255 18.609L9.905 17.988ZM10.157 17.751L9.5685 17.2858L9.56013 17.2969L10.157 17.751ZM18.5884 8.29306C18.8452 7.96809 18.79 7.49644 18.4651 7.23959C18.1401 6.98274 17.6684 7.03796 17.4116 7.36293L18.5884 8.29306ZM5.38691 14.655L7.83691 18.132L9.06309 17.268L6.61309 13.791L5.38691 14.655ZM7.82676 18.1172C8.37926 18.9425 9.49712 19.1636 10.3222 18.6112L9.48778 17.3648C9.35088 17.4564 9.16474 17.4195 9.07324 17.2828L7.82676 18.1172ZM10.3255 18.609C10.4852 18.5009 10.6319 18.3655 10.7539 18.2051L9.56013 17.2969C9.54214 17.3205 9.5168 17.3451 9.48451 17.367L10.3255 18.609ZM10.7454 18.2161L18.5884 8.29306L17.4116 7.36293L9.5686 17.2859L10.7454 18.2161ZM12 2.49899C17.7988 2.49899 22.5 7.20021 22.5 12.999H24C24 6.37178 18.6272 0.998993 12 0.998993V2.49899ZM22.5 12.999C22.5 18.7978 17.7988 23.499 12 23.499V24.999C18.6272 24.999 24 19.6262 24 12.999H22.5ZM12 23.499C6.20121 23.499 1.5 18.7978 1.5 12.999H0C0 19.6262 5.37279 24.999 12 24.999V23.499ZM1.5 12.999C1.5 7.20021 6.20121 2.49899 12 2.49899V0.998993C5.37279 0.998993 0 6.37178 0 12.999H1.5Z" />
  </Vector>
));

CheckCircle.displayName = 'CheckCircle';

CheckCircle.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default CheckCircle