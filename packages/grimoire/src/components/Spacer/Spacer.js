import styled from "@emotion/styled";
import { compose, color, space, minWidth, minHeight, display } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { shouldForwardProp } from "@phobon/base";

const spacerStyles = compose(color, space, minWidth, minHeight, display);

const Spacer = styled('span', {
  shouldForwardProp,
})(props => ({
  width: props.direction === 'horizontal' ? props.length : props.thickness,
  height: props.direction === 'vertical' ? props.length : props.thickness,
}),
  spacerStyles,
);

Spacer.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.display,
  ...propTypes.minWidth,
  ...propTypes.minHeight,

  thickness: PropTypes.node,
  length: PropTypes.node,
};

Spacer.defaultProps = {
  direction: 'horizontal',
  bg: 'grayscale.8',
  thickness: '2px',
  length: '80%',
  display: 'block',
  minWidth: 0,
};

export default Spacer;