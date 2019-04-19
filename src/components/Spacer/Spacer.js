import styled, { css } from 'styled-components';
import { color, space, width, height, minWidth, minHeight } from 'styled-system';
import PropTypes from 'prop-types';

const dimension = props => {
  const dimensions = {
    vertical: css`
      height: ${props.length};
      width: ${props.thickness};
    `,
    horizontal: css`
      height: ${props.thickness};
      width: ${props.length};
    `,
  };

  return dimensions[props.direction];
};

const Spacer = styled.span({
  minWidth: 0,
},
  color,
  space,
  width,
  height,
  minWidth,
  minHeight,
  dimension,
);

Spacer.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...minWidth.propTypes,
  ...minHeight.propTypes,

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