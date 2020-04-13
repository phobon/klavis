/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';
import { Box } from '@phobon/base';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

const extents = ({ theme, size }) => {
  const sizes = {
    s: theme.space[4],
    m: theme.space[5],
    l: theme.space[6],
  };

  return {
    width: sizes[size],
    height: sizes[size],
  };
};

const appearance = ({ variant, size, theme, dataLength }) => {
  const sizes = {
    s: theme.space[4],
    m: theme.space[5],
    l: theme.space[6],
  };

  const s = sizes[size];

  // This width calculation is here to handle overflow and layout correctly
  const width = (dataLength * s) - (dataLength * 6);

  const appearances = {
    'stack': {
      display: 'flex',
      height: s,
      width, 
    },
    'grid': {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${s}px, 1fr))`,
      gridAutoRows: 'auto',
    },
  };

  return appearances[variant];
};

const childPositions = ({ length, index, size, groupVariant, theme }) => {
  const sizes = {
    s: theme.space[4],
    m: theme.space[5],
    l: theme.space[6],
  };

  const props = {
    position: groupVariant === 'stack' ? 'absolute' : 'relative',
  };
  if (groupVariant === 'stack') {
    props.left = (sizes[size] - 8) * index;
    props.zIndex = length - index;
  }

  return props;
};

const avatarPropTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['initials', 'glyph']),
  bg: PropTypes.string,
  color: PropTypes.string,
};

const AvatarGroup = forwardRef(({ size, maxCount, data, variant, ...props }, ref) => {
  const remainder = data.length - maxCount;
  const avatarData = remainder > 0 ? data.slice(0, maxCount) : data;

  return (
    <Box
      position="relative"
      variant={variant}
      size={size}
      dataLength={avatarData.length + (remainder > 0 ? 1 : 0)}
      css={appearance}
      ref={ref}
      {...props}>
      
      {avatarData.map(({ name, variant: avatarVariant, ...rest }, i) => (
        <Avatar
          key={name}
          name={name}
          variant={avatarVariant}
          groupVariant={variant}
          size={size}
          index={i}
          css={childPositions}
          length={avatarData.length}
          {...rest} />
      ))}
      {remainder > 0 && (
        <Box
          bg="grayscale.8"
          borderRadius={6}
          size={size}
          border="3px solid white"
          groupVariant={variant}
          index={avatarData.length}
          css={`
            z-index: -1;
            ${extents}
            ${childPositions}
          `}>
          {`+${remainder}`}
        </Box>
      )}
    </Box>
  );
});

AvatarGroup.displayName = 'AvatarGroup';

AvatarGroup.propTypes = {
  variant: PropTypes.oneOf(['stack', 'grid']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  maxCount: PropTypes.number,
  data: PropTypes.arrayOf(avatarPropTypes).isRequired,
};

AvatarGroup.defaultProps = {
  variant: 'stack',
  size: 'm',
  maxCount: 5,
  gridGap: 3,
};

export default AvatarGroup;

