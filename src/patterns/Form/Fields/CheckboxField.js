/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Checkbox, Box } from '@phobon/base';

import FormFieldContext from '../FormFieldContext';

import AlertDiamond from '../../../icons/AlertDiamond';

const CheckboxField = ({ label, id, required = false, invalid, hint, visible = true, className, disabled, useUnprocessed = false, ...props }) => {
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
        invalid={invalid}
        disabled={fieldDisabled}
        label={label} />
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
      <Box mt={2} ml="2px" color="reds.2">
        <AlertDiamond size={16} />
        {React.isValidElement(invalid) ? invalid : <Text ml={1} fontSize={0} color="guidance.invalid.0">{invalid}</Text>}
      </Box>
    );
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
        invalid={invalid}
        disabled={fieldDisabled}
        label={label && (
          <>
            {label}
            {!required && optionalLabel && (
              <Text as="span" color="grayscale.4" lineHeight={0} ml={1}>
                {`(${optionalLabel()})`}
              </Text>
            )}
          </>
        )} />
      {invalidElement || hintElement}
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

  /** If the field has an invalid to display */
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

  disabled: PropTypes.bool,
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
  invalid: null,
  hint: null,
  placeholder: null,
  visible: true,
  className: null,
  useUnprocessed: false,
  disabled: false,
};

export default CheckboxField;