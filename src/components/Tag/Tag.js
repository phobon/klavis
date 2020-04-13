import styled from 'styled-components';
import { compose, space, color, fontSize, lineHeight, borderRadius } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

const tagStyles = compose(space, color, fontSize, lineHeight, borderRadius);

const Tag = styled('div').withConfig({
  shouldForwardProp,
})({
  maxWidth: '26rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
},
  tagStyles,
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
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.lineHeight,
  ...propTypes.borderRadius,
};

export default Tag;