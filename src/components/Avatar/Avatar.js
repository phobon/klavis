import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';

import Person from 'rmdi/lib/Person';

import { Box, Image, Text } from '@phobon/base';

const statusColor = props => {
  const statusColors = {
    'none': 'transparent',
    'error': props.theme.colors.reds[4],
    'warning': props.theme.colors.oranges[4],
    'success': props.theme.colors.greens[4],
  };

  return css`background-color: ${statusColors[props.status]};`;
};
const presenceColor = props => {
  const presenceColors = {
    'none': 'transparent',
    'unknown': props.theme.colors.grayscale[4],
    'unavailable': props.theme.colors.reds[4],
    'busy': props.theme.colors.oranges[4],
    'available': props.theme.colors.greens[4],
  };

  return css`background-color: ${presenceColors[props.presence]};`;
};

const extents = props => {
  const sizes = {
    's': props.theme.space[5],
    'm': props.theme.space[6],
    'l': props.theme.space[7],
  };

  return css`
    width: ${sizes[props.size]}px;
    height: ${sizes[props.size]}px;
  `;
};
const extentsText = props => {
  const fontSizes = {
    's': props.theme.fontSizes[0],
    'm': props.theme.fontSizes[1],
    'l': props.theme.fontSizes[3],
  };

  return css`font-size: ${fontSizes[props.size]}px;`;
};

const AvatarBox = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${props => props.theme.colors.grayscale[6]};
  border-radius: 100%;
  pointer-events: none;

  ${space} 

  ${extents}
  ${extentsText}

  &:before, &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: solid 3px ${props => props.theme.colors.background};
    pointer-events: none;
    right: -${props => props.theme.space[1]}px;
    z-index: 1;
  }

  &:before {
    top: -${props => props.theme.space[1]}px;
    opacity: ${props => props.status !== 'none' ? 1 : 0};
    ${statusColor}
  }

  &:after {
    bottom: -${props => props.theme.space[1]}px;
    opacity: ${props => props.presence !== 'none' ? 1 : 0};
    ${presenceColor}
  }
`;

const buttonFocus = props => props.onClick && css`
  cursor: pointer;

  &:focus {
    outline: 0;

    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      content: "";
      box-shadow: 0 0 0 2px ${props.theme.colors.guidance.focus};
      border-radius: ${props.theme.radii[props.borderRadius]}px;
      pointer-events: none;
      border-radius: inherit;
    }
  }
`;

const AvatarIndicatorButton = styled.button`
  width: inherit;
  height: inherit;
  font-size: inherit;
  border: 0;
  padding: 0;
  background: 0;
  pointer-events: all;
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;

  ${color}
  ${space}

  border-radius: 50%;

  ${buttonFocus}
`;

const AvatarIndicator = ({ avatarStyle, name, onClick, colourCombination }) => (
  <AvatarIndicatorButton as={onClick ? 'button' : 'div'} color={colourCombination[0]} bg={colourCombination[1]} onClick={onClick}>
    {avatarStyle === 'initials'
      ? name.split(' ').reduce((acc, current) => acc.charAt(0) + current.charAt(0)).substr(0, 2)
      : <Person color="inherit" />
    }
  </AvatarIndicatorButton>
);

AvatarIndicator.propTypes = {
  avatarStyle: PropTypes.oneOf(['initials', 'glyph']).isRequired,
  name: PropTypes.string.isRequired,
  colourCombination: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

AvatarIndicator.defaultProps = {
  onClick: null,
};

const Avatar = ({ image, name, size, status, presence, avatarStyle, nameStyle, onClick, colourCombination, ...props }) => (
  <Box {...props}>
    <AvatarBox
      size={size}
      status={status}
      presence={presence}>
      {image 
        ? <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick}><Image src={image} cover round /></AvatarIndicatorButton>
        : <AvatarIndicator onClick={onClick} avatarStyle={avatarStyle} name={name} colourCombination={colourCombination} />
      }
    </AvatarBox>
    {nameStyle !== 'none' && (
      <Text ml={2} fontSize="inherit" fontWeight="inherit" color="inherit">
        {nameStyle === 'first' ? name.split(' ')[0] : name}
      </Text>
    )}
  </Box>
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  ...Box.propTypes,

  /** Image to display */
  image: PropTypes.string,

  /** User name */
  name: PropTypes.string.isRequired,

  /** Size of avatar */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /** Current status of user */
  status: PropTypes.oneOf(['none', 'error', 'warning', 'success']),

  /** Current user presence */
  presence: PropTypes.oneOf(['none', 'unknown', 'unavailable', 'busy', 'available']),

  /** Style to display avatar when no image is present */
  avatarStyle: PropTypes.oneOf(['initials', 'glyph']),

  /** Style to display user name */
  nameStyle: PropTypes.oneOf(['none', 'first', 'full']),

  /** Fontsize for name display */
  fontSize: PropTypes.number,

  /** onClick function */
  onClick: PropTypes.func,

  /** A colour combination to use for this Avatar: [foreground, background] */
  colourCombination: PropTypes.array,
};

Avatar.defaultProps = {
  image: null,
  size: 'm',
  status: 'none',
  presence: 'none',
  avatarStyle: 'initials',
  nameStyle: 'none',
  fontSize: 1,
  onClick: null,
  colourCombination: ['hsl(8, 96%, 27%)', 'hsl(7, 100%, 88%)'],
};

export default Avatar;