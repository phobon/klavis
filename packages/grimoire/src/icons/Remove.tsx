/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { Vector, VectorProps } from "@phobon/base";

export const Remove: React.FunctionComponent<VectorProps & any> = forwardRef(
  (props, ref) => (
    <Vector ref={ref} {...props} viewBox="0 0 24 24">
      <path d="M0.21967 23.7187C-0.0732233 24.0116 -0.0732233 24.4864 0.21967 24.7793C0.512563 25.0722 0.987437 25.0722 1.28033 24.7793L0.21967 23.7187ZM23.7803 2.27932C24.0732 1.98643 24.0732 1.51156 23.7803 1.21866C23.4874 0.92577 23.0126 0.92577 22.7197 1.21866L23.7803 2.27932ZM22.7197 24.7793C23.0126 25.0722 23.4874 25.0722 23.7803 24.7793C24.0732 24.4864 24.0732 24.0116 23.7803 23.7187L22.7197 24.7793ZM1.28033 1.21866C0.987437 0.92577 0.512563 0.92577 0.21967 1.21866C-0.0732233 1.51156 -0.0732233 1.98643 0.21967 2.27932L1.28033 1.21866ZM1.28033 24.7793L23.7803 2.27932L22.7197 1.21866L0.21967 23.7187L1.28033 24.7793ZM23.7803 23.7187L1.28033 1.21866L0.21967 2.27932L22.7197 24.7793L23.7803 23.7187Z" />
    </Vector>
  )
);

Remove.displayName = "Remove";

Remove.defaultProps = {
  size: 24,
  color: "currentcolor",
};