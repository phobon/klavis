/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, color as styledColor } from 'styled-system';

import Person from 'rmdi/lib/Person';

import { Box, Image, Text, focus } from '@phobon/base';

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
  border-radius: 50%;
  pointer-events: none;

  ${space} 

  ${extents}
  ${extentsText}

  &:before, &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
  ${focus}
`;

const avatarFontSize = props => {
  const fontSizes = {
    s: css`font-size: ${props.theme.fontSizes[0]}px;`,
    m: css`font-size: ${props.theme.fontSizes[2]}px;`,
    l: css`font-size: ${props.theme.fontSizes[5]}px;`,
  };

  return fontSizes[props.size];
};

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

  ${styledColor}
  ${space}
  ${avatarFontSize}

  border-radius: 50%;

  ${buttonFocus}
`;

const AvatarIndicator = ({ avatarStyle, name, onClick, ...props }) => (
  <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick} {...props}>
    {avatarStyle === 'initials'
      ? <Text fontSize="inherit" color="inherit">{name.split(' ').reduce((acc, current) => acc.charAt(0) + current.charAt(0)).substr(0, 2)}</Text>
      : <Person color="inherit" />
    }
  </AvatarIndicatorButton>
);

AvatarIndicator.propTypes = {
  avatarStyle: PropTypes.oneOf(['initials', 'glyph']).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AvatarIndicator.defaultProps = {
  onClick: null,
};

const Avatar = ({ image, name, size, status, presence, avatarStyle, nameStyle, onClick, bg, color, nameMargin, ...props }) => (
  <Box {...props}>
    <AvatarBox
      size={size}
      status={status}
      presence={presence}>
      {image 
        ? <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick}><Image src={image} cover round alt="avatar image" /></AvatarIndicatorButton>
        : <AvatarIndicator size={size} onClick={onClick} avatarStyle={avatarStyle} name={name} bg={bg} color={color} />
      }
    </AvatarBox>
    {nameStyle !== 'none' && (
      <Text ml={nameMargin} fontSize="inherit" fontWeight="inherit" color="inherit">
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

  /** Font colour for name display */
  fontColor: PropTypes.string,

  /** Margin between avatar and name display */
  nameMargin: PropTypes.node,

  /** onClick function */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  image: null,
  size: 'm',
  status: 'none',
  presence: 'none',
  avatarStyle: 'initials',
  nameStyle: 'none',
  nameMargin: 2,
  fontSize: 1,
  onClick: null,
  bg: 'accent.8',
  color: 'accent.1',
  fontColor: 'foreground',
};

export default Avatar;