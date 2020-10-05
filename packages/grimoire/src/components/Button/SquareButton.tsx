/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Button, ButtonProps } from './Button';

export const SquareButton: React.FunctionComponent<ButtonProps & any> = ({ children, ...props }) => (
  <Button
    css={{
      padding: 0,
    }}
    {...props}>
    {...children}
  </Button>
);

SquareButton.displayName = 'CircleButton';

SquareButton.defaultProps = {
  toggled: false,
  disabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
};
