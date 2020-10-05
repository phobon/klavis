/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Button, ButtonProps } from './Button';

export const CircleButton: React.FunctionComponent<ButtonProps & any> = ({ children, ...props }) => (
  <Button
    css={{
      padding: 0,
      borderRadius: "50%",
    }}
    {...props}>
    {...children}
  </Button>
);

CircleButton.displayName = 'CircleButton';

CircleButton.defaultProps = {
  toggled: false,
  disabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
};
