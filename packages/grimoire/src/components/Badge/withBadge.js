/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import styled from "@emotion/styled";
import { compose, space, layout, position as styledPosition } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import PropTypes from 'prop-types';
import { destructureLayoutProps, gridPosition, shouldForwardProp } from '@phobon/base';

const badgeStyles = compose(space, layout, styledPosition, gridPosition);

const BadgeContainer = styled('div', {
  shouldForwardProp,
})`
  ${badgeStyles}

  &::before {
    content: '${props => props.badge}';
    min-width: ${props => props.theme.space[4]}px;
    max-width: ${props => props.theme.space[6]}px;
    height: ${props => props.theme.space[4]}px;
    border-radius: ${props => props.theme.radii[5]}px;
    font-size: ${props => props.theme.fontSizes[0]}px;
    position: absolute;
    transition: opacity 80ms ease-out, transform 80ms ease-out;
    pointer-events: none;
    z-index: 1;
    padding: ${props => props.badge.length > 2 ? `0 ${props.theme.space[2]}px` : 0};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: ${props => props.theme.space[4]}px;
    text-align: center;
    color: ${props => themeGet(`colors.${props.badgeColor}`, 'white')(props)};
    background-color: ${props => themeGet(`colors.${props.badgeBg}`)(props)};
  }

  background: 0;

  &.topleft {
    &::before {
      left: ${props => -props.theme.space[props.badgeOffset]}px;
      top: ${props => -props.theme.space[props.badgeOffset]}px;
    }
  }

  &.topright {
    &::before {
      right: ${props => -props.theme.space[props.badgeOffset]}px;
      top: ${props => -props.theme.space[props.badgeOffset]}px;
    }
  }

  &.bottomleft {
    &::before {
      bottom: ${props => -props.theme.space[props.badgeOffset]}px;
      left: ${props => -props.theme.space[props.badgeOffset]}px;
    }
  }

  &.bottomright {
    &::before {
      right: ${props => -props.theme.space[props.badgeOffset]}px;
      bottom: ${props => -props.theme.space[props.badgeOffset]}px;
    }
  }
`;

const withBadge = WrappedComponent => forwardRef(({
  badge,
  badgePosition = 'topleft',
  badgeBg = 'grayscale.2',
  badgeColor = 'white',
  badgeOffset = 2,
  ...props }, ref) => {
  // If there is no badge to display here, then just render the Wrapped component.
  if (!badge) {
    return (
      <WrappedComponent {...props} ref={ref} />
    );
  }

  const { onClick, color: _color, bg, ...containerProps } = props;
  const [{ fullWidth, fullHeight, width, height, position, ...layoutProps}, passthroughProps] = destructureLayoutProps(containerProps);

  return (
    <BadgeContainer
      position={position || 'relative'}
      width={width}
      height={height}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      {...layoutProps}
      className={`${badgePosition}`}
      badge={badge}
      badgeBg={badgeBg}
      badgeColor={badgeColor}
      badgeOffset={badgeOffset}>
      <WrappedComponent ref={ref} color={_color} bg={bg} {...passthroughProps} fullWidth={fullWidth || width != null} fullHeight={fullHeight || height != null} onClick={onClick} />
    </BadgeContainer>
  );
});

withBadge.propTypes = {
  /** Badge background colour */
  badgeBg: PropTypes.any,

  /** Badge colour */
  badgeColor: PropTypes.any,

  /** Badge position */
  badgePosition: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),

  /** Badge content */
  badge: PropTypes.any,

  /** Badge offset */
  badgeOffset: PropTypes.any,
};

withBadge.defaultProps = {
  badgeBg: 'grayscale.2',
  badgeColor: 'white',
  badgePosition: 'topleft',
  badgeOffset: 2,
  badge: null,
};

export default withBadge;