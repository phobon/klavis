import React, { forwardRef } from 'react';
import styled from "@emotion/styled";
import {
  compose,
  space as spacing,
  color,
  borderRadius,
  SpaceProps,
  ColorProps,
  BorderRadiusProps,
} from 'styled-system';
import { shouldForwardProp } from "@phobon/base";

import { asField } from './Fields/asField';

const fieldsetSystem = compose(spacing, color, borderRadius);

interface IFieldSetProps {
  id: string;
  disabled: boolean;
  invalid: any;
}

export type FieldSetProps = IFieldSetProps & SpaceProps & ColorProps & BorderRadiusProps;

const StyledFieldSet = styled('fieldset', {
  shouldForwardProp,
})<FieldSetProps>((props: any) => ({
    position: "relative",
    width: "100%",
    display: "flex",
    flex: "none",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    border: 0,
    transition: "border-color 80ms ease-out",
    "&::before": {
      content: "''",
      position: "absolute",
      left: -4,
      top: 0,
      bottom: 0,
      width: props.theme.space[1],
      backgroundColor: props.theme.colors.grayscale[6],
      borderRadius: props.theme.radii[4],
      transition: "background-color 90ms ease-out",
    },
    "&:hover": {
      borderColor: props.theme.colors.accent[5],
    },
    "> div": {
      "&:lastChild": {
        marginBottom: 0,
      },
    },
    "&[aria-invalid='true']": {
      "&::before": {
        backgroundColor: props.theme.colors.reds[3],
      },
      "&:hover": {
        "&::before": {
          backgroundColor: props.theme.colors.reds[4],
        },
      },
    },
    "&:disabled": {
      opacity: 0.5,
      pointerEvents: "none",
    },
    "> * + *": {
      marginTop: props.theme.space[3],
    }
  }),
  fieldsetSystem,
);

const CoreFieldSet: React.FunctionComponent<FieldSetProps & any> = forwardRef(({ id, disabled, invalid, children, ...props }, ref) => {
  const inputs = React.Children.map(children, (c, i) => {
    const k = `${id}__option${i}`;
    return React.cloneElement(c, { id: k, key: k, name: id })
  });
  return (
    <StyledFieldSet
      ref={ref}
      id={id}
      px={2}
      my={1}
      py={2}
      borderRadius={3}
      disabled={disabled}
      aria-invalid={invalid ? "true" : undefined}
      {...props}>
      {inputs}
    </StyledFieldSet>
  );
});

CoreFieldSet.defaultProps = {
  disabled: false,
  invalid: null,
};

export const FieldSet = asField(CoreFieldSet);