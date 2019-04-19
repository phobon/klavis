/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Label, Text } from '@phobon/base';

import FormFieldContext from '../FormFieldContext';

const asField = WrappedComponent => 
  ({ label, id, required = false, error, hint, visible = true, className, disabled, useUnprocessed = false, ...props }) => {
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
        error={error}
        disabled={fieldDisabled} />
    )
  }

  let hintElement = null;
  let errorElement = null;
  if (hint) {
    hintElement = React.isValidElement(hint)
      ? hint : <Text fontSize={0} mt={1} color="grayscale.3">{hint}</Text>;
  }
  if (error) {
    errorElement = React.isValidElement(error)
      ? error : <Text fontSize={0} mt={1} color="guidance.error.0">{error}</Text>
  }

  return (
    <Flex
      className="form__field"
      flexDirection="column"
      alignItems="flex-start"
      fullWidth
      css={{ position: 'relative' }}>
      <Box
        fullWidth
        flexDirection="column"
        alignItems="flex-start">
        {label && (
          <Label
            htmlFor={id}
            mr={2}
            mb={1}>
            <Text mr={1} color="grayscale.1">{label}</Text>
            {!required && optionalLabel && <Text color="grayscale.4">{`(${optionalLabel()})`}</Text>}
          </Label>
        )}
        <WrappedComponent
          id={id}
          fullWidth
          {...props}
          density={density}
          className={className}
          error={error}
          disabled={fieldDisabled} />
      </Box>
      {errorElement || hintElement}
    </Flex>
  );
};

asField.propTypes = {
  /** Field value */
  value: PropTypes.any,

  /** Field label */
  label: PropTypes.string,

  /** Field id */
  id: PropTypes.string,

  /** If the field is required, or not */
  required: PropTypes.bool,

  /** If the field has an error to display */
  error: PropTypes.any,

  /** If the field has a hint to display */
  hint: PropTypes.string,

  /** If the field has a placeholder to display */
  placeholder: PropTypes.string,

  /** If the field is visible, or not */
  visible: PropTypes.bool,

  /** Optional className for the field */
  className: PropTypes.string,
  
  /** Return an unprocessed version of the field */
  useUnprocessed: PropTypes.bool,
};

asField.defaultProps = {
  value: null,
  label: null,
  id: null,
  required: false,
  error: null,
  hint: null,
  placeholder: null,
  visible: true,
  className: null,
  disabled: false,
  useUnprocessed: false,
};

export default asField;
