import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import PropTypes from 'prop-types';
import { Box, destructureLayoutProps } from '@phobon/base';

const BadgeContainer = styled(Box)`
  position: relative;

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

const withBadge = WrappedComponent => ({
  badge,
  badgePosition = 'topleft',
  badgeBg = 'grayscale.2',
  badgeColor = 'white',
  badgeOffset = 2,
  ...props }) => {
  // If there is no badge to display here, then just render the Wrapped component.
  if (!badge) {
    return (
      <WrappedComponent {...props} />
    );
  }

  const { onClick, color: _color, bg, fullWidth, fullHeight, ...containerProps } = props;

  const [layoutProps, passthroughProps] = destructureLayoutProps(containerProps);

  // If an onClick function is required, add it to the passthroughProps.
  if (onClick) {
    passthroughProps.onClick = onClick;
  }

  return (
    <BadgeContainer
      {...layoutProps}
      className={`${badgePosition}`}
      badge={badge}
      badgeBg={badgeBg}
      badgeColor={badgeColor}
      badgeOffset={badgeOffset}>
      <WrappedComponent color={_color} bg={bg} {...passthroughProps} fullWidth={fullWidth} fullHeight={fullHeight} />
    </BadgeContainer>
  );
};

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