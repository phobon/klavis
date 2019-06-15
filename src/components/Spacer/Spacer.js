import styled from 'styled-components';
import { compose, color, space, width, height, minWidth, minHeight } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const spacerStyles = compose(color, space, width, height, minWidth, minHeight);

const Spacer = styled.span(props => ({
  minWidth: 0,
  display: 'block',
  width: props.direction === 'horizontal' ? props.length : props.thickness,
  height: props.direction === 'vertical' ? props.length : props.thickness,
}),
  spacerStyles,
);

Spacer.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.height,
  ...propTypes.minWidth,
  ...propTypes.minHeight,

  thickness: PropTypes.node,
  length: PropTypes.node,
};

Spacer.defaultProps = {
  direction: 'vertical',
  bg: 'grayscale.8',
  thickness: '2px',
  length: '80%',
};

export default Spacer;