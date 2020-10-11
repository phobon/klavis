/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from "@emotion/react";

import { Grid, GridProps } from "@phobon/base";

import { FormFieldContext } from "./FormFieldContext";

// Using a progressive enhancement strategy to ensure that we have consistent results
// on modern browsers using css grid, while still maintaining legacy behaviour
export const FieldGroup: React.FunctionComponent<GridProps & { space?: any } & any> = ({ children, space, ...props }) => {
  const { space: formSpace } = useContext(FormFieldContext);
  const gap = space || formSpace || 3;

  return (
    <Grid
      {...props}
      css={(theme: any) => ({
        display: "flex",
        flexDirection: "row",
        "> * + *": {
          marginLeft: typeof space === 'string' ? space : `${theme.space[props.space]}px`,
        },
        "@supports (display: grid)": {
          display: "grid",
          "> * + *": {
            marginLeft: "unset",
          },
        },
      })}
      gridGap={gap}
      className="form__fieldgroup"
      alignItems="flex-start"
      justifyContent="space-between">
      {children}
    </Grid>
  );
};

FieldGroup.defaultProps = {
  fullWidth: true,
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
};