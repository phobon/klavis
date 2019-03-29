import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space as spacing, color, borderRadius } from 'styled-system';

import FormFieldContext from './FormFieldContext';
import asField from './Fields/asField';

const isError = props => props.error && css`
  border-color: ${props.theme.colors.reds[3]};
  &:hover {
    border-color: ${props.theme.colors.guidance.error[1]};
  }
`;
const isDisabled = props => props.disabled && css`
  opacity: 0.5;
  pointer-events: none;
`;

const StyledFieldSet = styled.fieldset`
  width: 100%;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${spacing}
  ${color}
  ${borderRadius}
  border: 0;
  border-left: ${props => `${props.theme.space[1]}px solid ${props.theme.colors.grayscale[6]}`};
  transition: border-color 180ms ease-out;

  &:hover {
    border-color: ${props => props.theme.colors.accent[5]};
  }

  ${isError}
  ${isDisabled}

  > div {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const informationDensity = density => {
  const densities = {
    compact: 2,
    normal: 3,
    spacious: 4,
  };

  return densities[density];
};

const FieldSet = ({ id, disabled, error, children, ...props }) => {
  const { density } = useContext(FormFieldContext);
  const mb = informationDensity(density);

  const inputs = children.$$typeof ? React.cloneElement(children, { id: `${id}__option1`, name: id, mb }) : children.map((c, i) => {
    const k = `${id}__option${i}`;
    return React.cloneElement(c, { id: k, key: k, name: id, mb })
  });
  return (
    <StyledFieldSet id={id} px={2} my={1} py={2} borderRadius={3} disabled={disabled} error={error} mb={mb} {...props}>
      {inputs}
    </StyledFieldSet>
  );
};

FieldSet.propTypes = {
  /** Field id */
  id: PropTypes.string.isRequired,

  /** Radio or Checkbox children */
  children: PropTypes.node.isRequired,

  /** Whether the entire field set is disabled, or not */
  disabled: PropTypes.bool,

  /** If the field set is in error */
  error: PropTypes.node,
};

FieldSet.defaultProps = {
  disabled: false,
  error: null,
};

export default asField(FieldSet);