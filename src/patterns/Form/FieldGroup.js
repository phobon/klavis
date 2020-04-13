import React, { useContext, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '@phobon/base';

import FormFieldContext from './FormFieldContext';

const informationDensity = props => {
  const densities = {
    compact: css`
      margin-right: ${props.theme.space[3]}px;
    `,
    normal: css`
      margin-right: ${props.theme.space[4]}px;
    `,
    spacious: css`
      margin-right: ${props.theme.space[5]}px;
    `,
  };

  return densities[props.density];
};

const removeMargin = ({ removeBottomMargin }) => {
  if (removeBottomMargin) {
    return css`margin-bottom: 0 !important;`;
  }

  return null;
};

const FieldBox = styled(Box)`
  flex-basis: auto;

  > .form__field {
    /* Setting this as important to fix a flex layout issue with IE11 */
    flex-basis: ${props => `calc(1 / ${props.childrenPerRow + 1} * 100%)`} !important;
    ${informationDensity}
    ${removeMargin}

    &:last-child, &:nth-child(${props => `${props.childrenPerRow}n+0`}) {
      margin-right: 0;
    }
  }
`; 

const FieldGroup = forwardRef(({ children, childrenPerRow, ...props }, ref) => {
  const { density } = useContext(FormFieldContext);
  const noMargin = children.length <= childrenPerRow;

  return (
    <FieldBox
      ref={ref}
      {...props}
      childrenPerRow={childrenPerRow}
      removeBottomMargin={noMargin}
      density={density}
      className="form__fieldgroup"
      flexWrap="wrap"
      justifyContent="space-between">
      {children}
    </FieldBox>
  )
});

FieldGroup.propTypes = {
  ...Box.propTypes,

  /** Children */
  children: PropTypes.node,

  /** Number of children per row */
  childrenPerRow: PropTypes.number,
};

/* eslint react/default-props-match-prop-types: 0 */
FieldGroup.defaultProps = {
  children: null,
  fullWidth: true,
  childrenPerRow: 2,
};

FieldGroup.contextTypes = {
  space: PropTypes.number,
};

export default FieldGroup;