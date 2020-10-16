/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import styled from "@emotion/styled";
import {
  compose,
  space,
  layout,
  position as styledPosition,
  SpaceProps,
  LayoutProps,
  PositionProps,
  ColorProps
} from 'styled-system';
import themeGet from '@styled-system/theme-get';
import {
  destructureLayoutProps,
  gridPosition,
  fullWidth,
  fullHeight,
  shouldForwardProp,
  GridPositionProps,
  FullWidthProps,
  FullHeightProps,
} from '@phobon/base';

const badgeSystem = compose(space, layout, styledPosition, gridPosition, fullWidth, fullHeight);

export interface IWithBadgeProps {
  badgeBg?: string;
  badgeColor?: string;
  badgePosition?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright',
  badge?: string;
  badgeOffset?: number | string;
}

export type WithBadgeProps =
  IWithBadgeProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  GridPositionProps &
  React.HTMLAttributes<HTMLDivElement>;

const BadgeContainer = styled('div', {
  shouldForwardProp,
})<WithBadgeProps & FullWidthProps & FullHeightProps>(
  (props: any) => ({
    background: 0,
    "&::before": {
      content: `'${props.badge}'`,
      minWidth: props.theme.space[4],
      maxWidth: props.theme.space[6],
      height: props.theme.space[4],
      borderRadius: props.theme.radii[5],
      fontSize: props.theme.fontSizes[0],
      position: "absolute",
      transition: "opacity 80ms ease-out, transform 80ms ease-out",
      pointerEvents: "none",
      zIndex: 1,
      padding: props.badge.length > 2 ? `0 ${props.theme.space[2]}px` : 0,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      lineHeight: `${props.theme.space[4]}px`,
      textAlign: "center",
      color: themeGet(`colors.${props.badgeColor}`, 'white')(props),
      backgroundColor: themeGet(`colors.${props.badgeBg}`)(props),
    },
    "&.topleft": {
      "&::before": {
        left: -props.theme.space[props.badgeOffset],
        top: -props.theme.space[props.badgeOffset],
      },
    },
    "&.topright": {
      "&::before": {
        right: -props.theme.space[props.badgeOffset],
        top: -props.theme.space[props.badgeOffset],
      }
    },
    "&.bottomleft": {
      "&::before": {
        bottom: -props.theme.space[props.badgeOffset],
        left: -props.theme.space[props.badgeOffset],
      }
    },
    "&.bottomright": {
      "&::before": {
        right: -props.theme.space[props.badgeOffset],
        bottom: -props.theme.space[props.badgeOffset],
      },
    },
  }),
  badgeSystem,
);

export const withBadge = <T extends object>(WrappedComponent: React.ComponentType<any>) => forwardRef<T, WithBadgeProps>(
  ({
    badge,
    badgePosition = 'topleft',
    badgeBg = 'grayscale.2',
    badgeColor = 'white',
    badgeOffset = 2,
    ...props
  }, ref) => {
  // If there is no badge to display here, then just render the Wrapped component.
  if (!badge) {
    return (
      <WrappedComponent {...props} ref={ref} />
    );
  }

  const { onClick, color: _color, bg, ...containerProps } = props;
  const [{ fullWidth, fullHeight, width, height, position, ...layoutProps }, passthroughProps] = destructureLayoutProps(containerProps);

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

withBadge.defaultProps = {
  badgeBg: 'grayscale.2',
  badgeColor: 'white',
  badgePosition: 'topleft',
  badgeOffset: 2,
  badge: null,
};