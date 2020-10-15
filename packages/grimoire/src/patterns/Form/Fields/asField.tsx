/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Box, Label, Text } from '@phobon/base';

import { FormFieldContext } from '../FormFieldContext';

import { AlertCircle } from '../../../icons/AlertCircle';

export interface IAsFieldProps {
  value?: any;
  label?: string;
  id?: string;
  required?: boolean;
  invalid?: React.ReactNode;
  hint?: React.ReactNode;
  placeholder?: string;
  visible?: boolean;
  useUnprocessed?: boolean;
  disabled?: boolean;
  flex?: string;
  flexBasis?: string | number;
}

export type AsFieldProps = IAsFieldProps;

export const asField = <T extends object, U>(WrappedComponent: React.ComponentType<T & U & any>) => 
  React.forwardRef<T, U & AsFieldProps>(({
    label,
    id,
    required = false,
    invalid,
    hint,
    visible = true,
    disabled,
    useUnprocessed = false,
    flex,
    flexBasis,
    ...props
  }, 
  ref: any) => {
    const { optionalLabel, density, formDisabled } = useContext(FormFieldContext);

    // If the field shouldn't be visible, don't render it.
    if (!visible) {
      return null;
    }

    const fieldDisabled = disabled || formDisabled;

    // If we want to use an unprocessed component.
    if (useUnprocessed) {
      return (
        <WrappedComponent
          id={id}
          {...props}
          invalid={invalid}
          disabled={fieldDisabled}
          ref={ref} />
      );
    }

    return (
      <Box
        className="form__field"
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
        flexShrink={0}
        flex={flex}
        fullWidth>
        <Box
          fullWidth
          flexDirection="column"
          alignItems="flex-start">
          {label && (
            <Label
              htmlFor={id}
              mb={1}
              alignItems="baseline">
              <Text as="span" display="inline">{label}</Text>
              {!required && optionalLabel && <Text as="span" color="grayscale.4" ml={1} display="inline">{`(${optionalLabel()})`}</Text>}
            </Label>
          )}
          <Box flex={1} fullWidth>
            <WrappedComponent
              id={id}
              fullWidth
              {...props}
              density={density}
              invalid={invalid}
              disabled={fieldDisabled}
              ref={ref} />
          </Box>
        </Box>
        {hint && (
          <Text fontSize={0} mt={1} color="grayscale.3">{hint}</Text>
        )}
        {invalid && (
          <Box mt={1} color="reds.2">
            <AlertCircle width={16} height={16} />
            <Text ml={1} fontSize={0} color="guidance.error.0">{invalid}</Text>
          </Box>
        )}
      </Box>
    );
  }
);

asField.defaultProps = {
  required: false,
  visible: true,
  disabled: false,
  useUnprocessed: false,
};