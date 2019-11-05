/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, color as styledColor, borderRadius as styledBorderRadius } from 'styled-system';

import { Box, Image, Text, focus } from '@phobon/base';

import User from '../../icons/User';

const statusColor = props => {
  const statusColors = {
    none: 'transparent',
    error: props.theme.colors.reds[5],
    warning: props.theme.colors.oranges[6],
    success: props.theme.colors.greens[5],
  };

  return css`background-color: ${statusColors[props.status]};`;
};
const presenceColor = props => {
  const presenceColors = {
    none: 'transparent',
    unknown: props.theme.colors.grayscale[5],
    unavailable: props.theme.colors.reds[5],
    busy: props.theme.colors.oranges[6],
    available: props.theme.colors.greens[5],
  };

  return css`background-color: ${presenceColors[props.presence]};`;
};

const extents = props => {
  const sizes = {
    s: props.theme.space[5],
    m: props.theme.space[6],
    l: props.theme.space[7],
  };

  return css`
    width: ${sizes[props.size]}px;
    height: ${sizes[props.size]}px;
  `;
};

const statusElements = props => {
  const sizes = {
    s: css`
      width: 16px;
      height: 16px;
      right: -${props.theme.space[2]}px;
    `,
    m: css`
      width: 20px;
      height: 20px;
      right: -${props.theme.space[1]}px;
    `,
    l: css`
      width: 24px;
      height: 24px;
      right: -${props.theme.space[1]}px;
    `,
  };

  return sizes[props.size];
};

const AvatarBox = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${props => props.theme.colors.grayscale[6]};
  pointer-events: none;

  ${space}
  ${styledBorderRadius}

  ${extents}

  &:before, &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: solid 3px ${props => props.theme.colors.background};
    pointer-events: none;
    z-index: 1;
    ${statusElements}
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
    m: css`font-size: ${props.theme.fontSizes[3]}px;`,
    l: css`font-size: ${props.theme.fontSizes[6]}px;`,
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
  line-height: 0;
  overflow: hidden;

  ${styledColor}
  ${space}
  ${avatarFontSize}
  
  ${styledBorderRadius}

  ${buttonFocus}
`;

const AvatarIndicator = ({ avatarStyle, name, onClick, ...props }) => (
  <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick} {...props}>
    {avatarStyle === 'initials'
      ? <Text fontSize="inherit" color="inherit" lineHeight={0}>{name.split(' ').reduce((acc, current) => acc.charAt(0) + current.charAt(0)).substr(0, 2)}</Text>
      : <User size={20} />
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

const Avatar = ({
  image,
  name,
  size,
  status,
  presence,
  avatarStyle,
  onClick,
  bg, 
  color,
  nameMargin,
  borderRadius,
  ...props
}) => (
  <Box {...props}>
    <AvatarBox
      size={size}
      status={status}
      presence={presence}
      borderRadius={borderRadius}>
      {image 
        ? (
          <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick} borderRadius={borderRadius}>
            <Image src={image} cover borderRadius={borderRadius} alt="avatar image" />
          </AvatarIndicatorButton>
        )
        : <AvatarIndicator size={size} onClick={onClick} avatarStyle={avatarStyle} name={name} bg={bg} color={color} borderRadius={borderRadius} />
      }
    </AvatarBox>
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

  /** onClick function */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  image: null,
  size: 'm',
  status: 'none',
  presence: 'none',
  avatarStyle: 'initials',
  onClick: null,
  bg: 'accent.8',
  color: 'accent.1',
  fontColor: 'foreground',
  borderRadius: 6,
};

export default Avatar;