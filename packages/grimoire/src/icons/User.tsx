/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { Vector, VectorProps } from "@phobon/base";

export const User: React.FunctionComponent<VectorProps> = forwardRef(
  (props, ref) => (
    <Vector ref={ref} {...props} viewBox="0 0 12 14">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00963 7.38803C9.13468 6.68014 9.88232 5.42738 9.88232 4C9.88232 1.79086 8.09146 0 5.88232 0C3.67319 0 1.88232 1.79086 1.88232 4C1.88232 5.42739 2.62998 6.68016 3.75504 7.38805C1.85046 8.11041 0.409278 9.77449 0 11.8118C1.57752 13.1753 3.63362 14 5.88236 14C8.13109 14 10.1872 13.1753 11.7647 11.8118C11.3554 9.77448 9.91424 8.11038 8.00963 7.38803Z"
      />
    </Vector>
  )
);

User.displayName = "User";

User.defaultProps = {
  width: 21,
  height: 24,
  fill: "currentcolor",
  stroke: "none",
};
