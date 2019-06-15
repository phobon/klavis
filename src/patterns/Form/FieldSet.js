import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, space as spacing, color, borderRadius } from 'styled-system';

import FormFieldContext from './FormFieldContext';
import asField from './Fields/asField';

const fieldsetStyles = compose(spacing, color, borderRadius);

const StyledFieldSet = styled.fieldset.attrs(props => ({
  'aria-invalid': props.invalid ? true : undefined,
}))`
  position: relative;
  width: 100%;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${fieldsetStyles}
  border: 0;
  transition: border-color 80ms ease-out;

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    bottom: 0;
    width: ${props => props.theme.space[1]}px;
    background-color: ${props => props.theme.colors.grayscale[6]};
    border-radius: ${props => props.theme.radii[4]}px;
    transition: background-color 90ms ease-out;
  }

  &:hover {
    border-color: ${props => props.theme.colors.accent[5]};
  }

  > div {
    &:last-child {
      margin-bottom: 0;
    }
  }

  &[aria-invalid="true"] {
    &::before {
      background-color: ${props => props.theme.colors.reds[3]};
    }
    &:hover {
      &::before {
        background-color: ${props => props.theme.colors.reds[4]};
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
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

const FieldSet = ({ id, disabled, invalid, children, ...props }) => {
  const { density } = useContext(FormFieldContext);
  const mb = informationDensity(density);

  const inputs = React.Children.map(children, (c, i) => {
    const k = `${id}__option${i}`;
    return React.cloneElement(c, { id: k, key: k, name: id, mb })
  });
  return (
    <StyledFieldSet id={id} px={2} my={1} py={2} borderRadius={3} disabled={disabled} invalid={invalid} {...props}>
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

  /** If the field set is in invalid */
  invalid: PropTypes.node,
};

FieldSet.defaultProps = {
  disabled: false,
  invalid: null,
};

export default asField(FieldSet);