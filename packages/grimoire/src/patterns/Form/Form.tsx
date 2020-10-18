import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import {
  compose,
  space as styledSpace,
  width,
  height,
  alignItems as styledAlignItems,
  justifyContent as styledJustifyContent,
  grid,
  flexbox,
  SpaceProps,
  WidthProps,
  HeightProps,
  AlignItemsProps,
  JustifyContentProps,
  GridProps,
  FlexboxProps,
} from "styled-system";
import {
  fullWidth,
  fullHeight,
  shouldForwardProp,
  FullWidthProps,
  FullHeightProps,
} from "@phobon/base";

import { FormFieldContext } from "./FormFieldContext";

const informationDensity = ({ theme, density }) => {
  const densities = {
    compact: {
      marginTop: theme.space[3],
    },
    normal: {
      marginTop: theme.space[4],
    },
    spacious: {
      marginTop: theme.space[5],
    },
  };

  return densities[density];
};

const formSystem = compose(
  styledSpace,
  width,
  height,
  styledAlignItems,
  styledJustifyContent,
  fullWidth,
  fullHeight,
  grid,
  flexbox
);

interface IFormProps {
  density?: "compact" | "normal" | "spacious";
  disabled?: boolean;
  optionalLabel?: () => string;
}

export type FormProps =
  IFormProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  AlignItemsProps &
  JustifyContentProps &
  FullWidthProps &
  FullHeightProps &
  GridProps &
  FlexboxProps &
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const StyledForm = styled("form", {
  shouldForwardProp,
})<FormProps>(({ theme, density }) => ({
  boxSizing: "border-box",
  display: "flex",
  flex: "none",
  flexDirection: "column",
  ".form__field": {
    flex: "1 0 auto",
  },
  "> * + *": {
    ...informationDensity({ theme, density }),
  },
}),
  formSystem,
);

export const Form: React.FunctionComponent<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      children,
      density,
      optionalLabel,
      flexDirection,
      alignItems,
      justifyContent,
      disabled,
      ...props
    },
    ref
  ) => (
    <StyledForm
      ref={ref}
      {...props}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      density={density}
    >
      <FormFieldContext.Provider
        value={{
          density,
          flexDirection,
          alignItems,
          justifyContent,
          optionalLabel,
          formDisabled: disabled,
        }}
      >
        {children}
      </FormFieldContext.Provider>
    </StyledForm>
  )
);

Form.defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fullWidth: true,
  fullHeight: false,
  density: "normal",
  optionalLabel: () => "optional",
  disabled: false,
};