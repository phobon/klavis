import styled from 'styled-components';
import { space, color, fontSize, lineHeight, borderRadius } from 'styled-system';

const Tag = styled.div({
  maxWidth: '26rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
},
  color,
  space,
  fontSize,
  lineHeight,
  borderRadius,
);

Tag.displayName = 'Tag';

Tag.defaultProps = {
  color: 'foreground',
  bg: 'grayscale.7',
  lineHeight: 1.8,
  fontSize: 0,
  py: '1px',
  px: 2,
  borderRadius: 3,
};

Tag.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...borderRadius.propTypes,
};

export default Tag;