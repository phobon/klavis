/** @jsx jsx */
import React, { useContext } from 'react';
import { jsx } from "@emotion/react";

import { Grid, GridProps } from "@phobon/base";

import { FormFieldContext } from "./FormFieldContext";

// Using a progressive enhancement strategy to ensure that we have consistent results
// on modern browsers using css grid, while still maintaining legacy behaviour
export const FieldGroup: React.FunctionComponent<GridProps & { space?: any } & any> = ({ children, gridTemplateColumns, space, ...props }) => {
  const { space: formSpace } = useContext(FormFieldContext);
  const gap = space || formSpace;

  return (
    <Grid
      {...props}
      css={(props: any) => ({
        display: "flex",
        flexDirection: "row",
        "> * + *": {
          marginLeft: typeof props.space === 'string' ? props.space : `${props.theme.space[props.space]}px`,
        },
        "@supports (display: grid)": {
          display: "grid",
          "> * + *": {
            marginLeft: "unset",
          },
        },
      })}
      gridGap={gap}
      gridTemplateColumns={gridTemplateColumns}
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