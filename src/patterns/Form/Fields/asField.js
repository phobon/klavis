/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Label, Text } from '@phobon/base';

import FormFieldContext from '../FormFieldContext';

import AlertCircle from '../../../icons/AlertCircle';

const asField = WrappedComponent => 
  ({ label, id, required = false, invalid, hint, visible = true, className, disabled, useUnprocessed = false, flex, flexBasis, ...props }) => {
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
        disabled={fieldDisabled} />
    )
  }

  let hintElement = null;
  let invalidElement = null;
  if (hint) {
    hintElement = React.isValidElement(hint)
      ? hint : <Text fontSize={0} mt={1} color="grayscale.3">{hint}</Text>;
  }
  if (invalid) {
    invalidElement = (
      <Box mt={2} color="reds.2">
        <AlertCircle width={16} height={16} />
        {React.isValidElement(invalid) ? invalid : <Text ml={1} fontSize={0} color="guidance.error.0">{invalid}</Text>}
      </Box>
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
            {label}
            {!required && optionalLabel && <Text as="span" color="grayscale.4" ml={1}>{`(${optionalLabel()})`}</Text>}
          </Label>
        )}
        <Box flex={1} fullWidth>
          <WrappedComponent
            id={id}
            fullWidth
            {...props}
            density={density}
            className={className}
            invalid={invalid}
            disabled={fieldDisabled} />
        </Box>
      </Box>
      {invalidElement || hintElement}
    </Box>
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

  /** If the field has an invalid message to display */
  invalid: PropTypes.any,

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
  invalid: null,
  hint: null,
  placeholder: null,
  visible: true,
  className: null,
  disabled: false,
  useUnprocessed: false,
};

export default asField;
