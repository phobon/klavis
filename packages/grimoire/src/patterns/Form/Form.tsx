import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import {
  compose,
  space as styledSpace,
  width,
  height,
  alignItems as styledAlignItems,
  justifyContent as styledJustifyContent,
  SpaceProps,
  WidthProps,
  HeightProps,
  AlignItemsProps,
  JustifyContentProps,
} from "styled-system";
import {
  fullWidth,
  fullHeight,
  shouldForwardProp,
  FullWidthProps,
  FullHeightProps,
} from "@phobon/base";

import { FormFieldContext } from "./FormFieldContext";

const informationDensity = (props) => {
  const densities = {
    compact: {
      marginBottom: props.theme.space[3],
    },
    normal: {
      marginBottom: props.theme.space[4],
    },
    spacious: {
      marginBottom: props.theme.space[5],
    },
  };

  return densities[props.density];
};

const formSystem = compose(styledSpace, width, height, styledAlignItems, styledJustifyContent, fullWidth, fullHeight);

interface IFormProps {
  density: "compact" | "normal" | "spacious";
  optionalLabel: () => {};
}

export type FormProps =
  IFormProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  AlignItemsProps &
  JustifyContentProps &
  FullWidthProps &
  FullHeightProps;

const StyledForm = styled("form", {
  shouldForwardProp,
})<FormProps>((props: any) => ({
  boxSizing: "border-box",
  display: "flex",
  flex: "none",
  flexDirection: "column",
  ".form__field": {
    flex: "1 0 auto",
  },
  ".form__field, .form__fieldgroup": {
    ...informationDensity,
  },
  "h1, h2, h3, h4, h5, h6": {
    marginBottom: props.theme.space[props.space - 1],
  },
}),
  formSystem,
);

export const Form: React.FunctionComponent<FormProps & any> = forwardRef(
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