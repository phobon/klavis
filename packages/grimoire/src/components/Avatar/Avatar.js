/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';
import { space, border as styledBorder, color as styledColor, borderRadius as styledBorderRadius } from 'styled-system';

import { Box, Image, Text, focus, shouldForwardProp } from '@phobon/base';

import User from '../../icons/User';

const statusColor = props => {
  const statusColors = {
    none: 'transparent',
    error: props.theme.colors.reds[6],
    warning: props.theme.colors.oranges[6],
    success: props.theme.colors.greens[5],
  };

  return css`background-color: ${statusColors[props.status]};`;
};
const presenceColor = props => {
  const presenceColors = {
    none: 'transparent',
    unknown: props.theme.colors.grayscale[6],
    unavailable: props.theme.colors.reds[6],
    busy: props.theme.colors.oranges[6],
    available: props.theme.colors.greens[6],
  };

  return css`background-color: ${presenceColors[props.presence]};`;
};

const extents = props => {
  const sizes = {
    s: props.theme.space[4],
    m: props.theme.space[5],
    l: props.theme.space[6],
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
      right: -10px;
    `,
    m: css`
      width: 20px;
      height: 20px;
      right: -12px;
    `,
    l: css`
      width: 24px;
      height: 24px;
      right: -14px;
    `,
  };

  return sizes[props.size];
};

const AvatarBox = styled('div', {
  shouldForwardProp,
})`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  position: relative;
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
    m: css`font-size: ${props.theme.fontSizes[1]}px;`,
    l: css`font-size: ${props.theme.fontSizes[4]}px;`,
  };

  return fontSizes[props.size];
};

const AvatarIndicatorButton = styled('button', {
  shouldForwardProp,
})`
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
  ${styledBorder}
  ${space}
  ${avatarFontSize}
  
  ${styledBorderRadius}

  ${buttonFocus}
`;

const AvatarIndicator = ({ size, variant, name, onClick, ...props }) => {
  let width;
  let height;
  switch (size) {
    case 's':
      width = 9;
      height = 10;
      break;
    case 'l':
      width = 18;
      height = 21;
      break;
    default:
      width = 12;
      height = 14;
      break;
  }
  return (
    <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick} size={size} {...props}>
      {variant === 'initials'
        ? <Text fontSize="inherit" color="inherit" lineHeight={0}>{name.split(' ').reduce((acc, current) => acc.charAt(0) + current.charAt(0)).substr(0, 2)}</Text>
        : (
          <User width={width} height={height} fill="white" />
        )}
    </AvatarIndicatorButton>
  );
};

AvatarIndicator.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  variant: PropTypes.oneOf(['initials', 'glyph']).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AvatarIndicator.defaultProps = {
  onClick: null,
};

const Avatar = forwardRef(({
  image,
  name,
  size,
  variant,
  onClick,
  bg, 
  color,
  borderRadius,
  className,
  border,
  borderColor,
  ...props
}, ref) => (
  <AvatarBox
    ref={ref}
    size={size}
    borderRadius={borderRadius}
    className={`grimoire__avatar ${className ?? ''}`}
    {...props}>
    {image 
      ? (
        <AvatarIndicatorButton as={onClick ? 'button' : 'div'} onClick={onClick} borderRadius={borderRadius} border={border} borderColor={borderColor}>
          <Image src={image} cover borderRadius={borderRadius} alt="avatar image" />
        </AvatarIndicatorButton>
      )
      : <AvatarIndicator size={size} onClick={onClick} variant={variant} name={name} bg={bg} color={color} borderRadius={borderRadius} border={border} borderColor={borderColor} />}
  </AvatarBox>
));

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
  variant: PropTypes.oneOf(['initials', 'glyph']),

  /** onClick function */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  image: null,
  size: 'm',
  status: 'none',
  presence: 'none',
  variant: 'initials',
  onClick: null,
  bg: 'accent.4',
  color: 'white',
  fontColor: 'foreground',
  borderRadius: 6,
  border: '3px solid',
  borderColor: 'white',
};

export default Avatar;