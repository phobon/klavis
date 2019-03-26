import React from 'react';
import styled, { css }  from 'styled-components';
import { space as styledSpace, width, height, alignItems as styledAlignItems, justifyContent as styledJustifyContent } from 'styled-system';
import PropTypes from 'prop-types';
import { fullWidth, fullHeight } from '@phobon/base';

import FormFieldContext from './FormFieldContext';

const informationDensity = props => {
  const densities = {
    compact: css`
      margin-bottom: ${props.theme.space[3]}px;
    `,
    normal: css`
      margin-bottom: ${props.theme.space[4]}px;
    `,
    spacious: css`
      margin-bottom: ${props.theme.space[5]}px;
    `,
  };

  return densities[props.density];
};

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex: none;

  ${styledSpace}
  ${styledAlignItems}
  ${styledJustifyContent}
  flex-direction: column;
  
  ${fullWidth}
  ${fullHeight}

  ${width}
  ${height}

  .form__field {
    flex: 1 0 auto;
  }
  
  .form__field, .form__fieldgroup {
    ${informationDensity}
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${props => props.theme.space[props.space - 1]}px;
  }
`;

const Form = ({
  children,
  density,
  optionalLabel,
  flexDirection,
  alignItems,
  justifyContent,
  ...props }) => (
    <StyledForm {...props} flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent} density={density}>
      <FormFieldContext.Provider value={{
        density,
        flexDirection,
        alignItems,
        justifyContent,
        optionalLabel,
      }}>
        <fieldset disabled={isDisabled}>
          {children}
        </fieldset>
      </FormFieldContext.Provider>
    </StyledForm>
);

Form.propTypes = {
  ...styledSpace.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...styledAlignItems.propTypes,
  ...styledJustifyContent.propTypes,

  /** Whether container should take up all available width, or not */
  fullWidth: PropTypes.bool,

  /** Whether container should take up all available height, or not */
  fullHeight: PropTypes.bool,

  /** Information density for this form */
  density: PropTypes.oneOf(['compact', 'normal', 'spacious']),

  /** Callback to set the optional label in fields */
  optionalLabel: PropTypes.func,

  /** A value indicating whether the whole form should be disabled, or not. */
  isDisabled: PropTypes.bool,
};

/* eslint react/default-props-match-prop-types: 0 */
Form.defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fullWidth: true,
  fullHeight: false,
  density: 'normal',
  optionalLabel: () => 'optional',
  isDisabled: false,
};

export default Form;
