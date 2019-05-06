/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Label, Text } from '@phobon/base';

import FormFieldContext from '../FormFieldContext';

import AlertDiamond from '../../../icons/AlertDiamond';

const asField = WrappedComponent => 
  ({ label, id, required = false, invalid, hint, visible = true, className, disabled, useUnprocessed = false, ...props }) => {
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
    invalidElement = React.isValidElement(invalid)
      ? invalid : <Text fontSize={0} mt={1} color="guidance.error.0">{invalid}</Text>
  }

  return (
    <Flex
      className="form__field"
      flexDirection="column"
      alignItems="flex-start"
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
        <Box
          fullWidth
          css={{ position: 'relative' }}
          color="reds.5">
          <WrappedComponent
            id={id}
            fullWidth
            {...props}
            density={density}
            className={className}
            invalid={invalid}
            disabled={fieldDisabled} />
          {invalidElement && <Box bg="grayscale.8" color="inherit" width={28} height={20} zIndex={1} css={{ position: 'absolute', right: 4 }}><AlertDiamond size={20} /></Box>}
        </Box>
      </Box>
      {invalidElement || hintElement}
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
