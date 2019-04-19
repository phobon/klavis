/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Checkbox } from '@phobon/base';

import FormFieldContext from '../FormFieldContext';

const Label = ({ label, required, optionalLabel }) => (
  <Flex justifyContent="flex-start" fullHeight>
    <Text mr={1} color="grayscale.1" lineHeight={0}>{label}</Text>
    {!required && optionalLabel && (
      <Text color="grayscale.4" lineHeight={0}>
        {`(${optionalLabel()})`}
      </Text>
    )}
  </Flex>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  optionalLabel: PropTypes.string.isRequired,
};

const CheckboxField = ({ label, id, required = false, error, hint, visible = true, className, disabled, useUnprocessed = false, ...props }) => {
  const { optionalLabel, density, formDisabled } = useContext(FormFieldContext);

  // If the field shouldn't be visible, don't render it.
  if (!visible) {
    return null;
  }

  const fieldDisabled = disabled || formDisabled;

  // If we want to use an unprocessed component.
  if (useUnprocessed) {
    return (
      <Checkbox
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
      <Checkbox
        id={id}
        fullWidth
        {...props}
        density={density}
        className={className}
        error={error}
        disabled={fieldDisabled}
        label={label && <Label label={label} required={required} optionalLabel={optionalLabel} />} />
      {errorElement || hintElement}
    </Flex>
  );
};

CheckboxField.propTypes = {
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

  disabled: PropTypes.bool,

  isDisabled: PropTypes.bool,
};

CheckboxField.contextTypes = {
  flexDirection: PropTypes.string,
  optionalLabel: PropTypes.string,
  formDisabled: PropTypes.bool,
};

CheckboxField.defaultProps = {
  value: null,
  label: null,
  id: null,
  required: false,
  error: null,
  hint: null,
  placeholder: null,
  visible: true,
  className: null,
  useUnprocessed: false,
  disabled: false,
  isDisabled: false,
};

/** @component */
export default CheckboxField;