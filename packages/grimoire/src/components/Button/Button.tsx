/* eslint-disable react/default-props-match-prop-types */
import React from "react";
import styled from "@emotion/styled";
import {
  fullWidth,
  fullHeight,
  focus,
  gridPosition,
  shouldForwardProp,
  FullWidthProps,
  FullHeightProps,
  GridPositionProps,
} from '@phobon/base';
import {
  variant,
  compose,
  space,
  layout,
  border,
  flexbox,
  typography,
  position,
  SpaceProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  TypographyProps,
  PositionProps,
} from 'styled-system';

import { withTooltip } from '../Tooltip';

const variants = {
  primary: {
    color: 'white',
    fill: 'white',
    bg: 'accent.4',
    '&:hover': {
      bg: 'accent.2',
    },
    '&[aria-pressed="true"]': {
      bg: 'accent.2',
      '&:hover': {
        bg: 'accent.4',
      },
    },
  },
  secondary: {
    color: 'grayscale.1',
    fill: 'grayscale.1',
    bg: 'grayscale.8',
    '&:hover': {
      bg: 'grayscale.7',
    },
    '&[aria-pressed="true"]': {
      bg: 'grayscale.2',
      color: 'grayscale.9',
      '&:hover': {
        bg: 'grayscale.4',
      },
    },
  },
  tertiary: {
    color: 'grayscale.1',
    fill: 'grayscale.1',
    bg: 'transparent',
    '&:hover': {
      bg: 'grayscale.7',
    },
    '&[aria-pressed="true"]': {
      bg: 'grayscale.2',
      color: 'grayscale.9',
      '&:hover': {
        bg: 'grayscale.4',
      },
    },
  },
  warning: {
    bg: 'guidance.warning.1',
    color: 'guidance.warning.0',
    fill: 'guidance.warning.0',
    '&:hover': {
      bg: 'oranges.7',
    },
    '&[aria-pressed="true"]': {
      bg: 'oranges.6',
      '&:hover': {
        bg: 'oranges.7',
      },
    },
  },
  danger: {
    bg: 'guidance.error.1',
    color: 'guidance.error.0',
    fill: 'guidance.error.0',
    '&:hover': {
      bg: 'reds.7',
    },
    '&[aria-pressed="true"]': {
      bg: 'reds.6',
      '&:hover': {
        bg: 'reds.7',
      },
    },
  },
  success: {
    bg: 'guidance.success.1',
    color: 'guidance.success.0',
    fill: 'guidance.success.0',
    '&:hover': {
      bg: 'greens.7',
    },
    '&[aria-pressed="true"]': {
      bg: 'greens.6',
      '&:hover': {
        bg: 'greens.7',
      },
    },
  },
  link: {
    bg: 'transparent',
    border: 'none',
    color: 'grayscale.1',
    fill: 'grayscale.1',
    padding: 0,
    textDecoration: 'underline dotted',
    '&:hover': {
      color: 'accent.2',
      fill: 'accent.2',
      textDecoration: 'underline',
    },
    '&[aria-pressed="true"]': {
      color: 'accent.4',
      fill: 'accent.4',
      textDecoration: 'underline',
      '&:hover': {
        color: 'grayscale.1',
        fill: 'grayscale.1',
        textDecoration: 'underline dotted',
      },
    },
  },
  clean: {
    bg: 'transparent',
    border: 0,
    color: 'inherit',
    fill: 'inherit',
    padding: 0,
    width: 'unset',
    height: 'unset',
  },
};

const size = ({ theme, pl, pr, size: propsSize }) => {
  const sizes = {
    s: {
      minWidth: theme.space[4],
      height: theme.space[4],
      paddingLeft: theme.space[pl || 2],
      paddingRight: theme.space[pr || 2],
    },
    m: {
      minWidth: theme.space[5],
      height: theme.space[5],
      paddingLeft: theme.space[pl || 3],
      paddingRight: theme.space[pr || 3],
    },
    l: {
      minWidth: theme.space[6],
      height: theme.space[6],
      paddingLeft: theme.space[pl || 3],
      paddingRight: theme.space[pr || 3],
    },
  };

  return sizes[propsSize];
};

const disabled = ({ theme }) => ({
  '&:disabled': {
    opacity: 0.5,
    backgroundColor: theme.colors.grayscale[7],
    border: 0,
    color: theme.colors.grayscale[4],
    fill: theme.colors.grayscale[4],
    pointerEvents: 'none',
  },
});

const buttonSystem = compose(space, layout, border, flexbox, typography, position, fullWidth, fullHeight, gridPosition);

export interface IButtonProps {
  toggled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'link' | 'clean';
  size?: 's' | 'm' | 'l';
}

export type ButtonProps =
 IButtonProps &
 SpaceProps &
 LayoutProps &
 BorderProps &
 FlexboxProps &
 TypographyProps &
 PositionProps &
 FullWidthProps &
 FullHeightProps &
 GridPositionProps;

const StyledButton = styled('button', {
  shouldForwardProp,
})<ButtonProps>({
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 120ms ease-out',
    ...focus,
    ...disabled,
  },
  buttonSystem,
  size,
  variant({ variants }),
);

const GrimoireButton: React.PropsWithChildren<ButtonProps & any> = ({ children, toggled, ...props }) => (
  <StyledButton
    aria-pressed={toggled ? 'true' : undefined}
    toggled={toggled}
    {...props}>
    {children}
  </StyledButton>
);

export const Button = withTooltip(GrimoireButton);

Button.displayName = 'Button';

Button.defaultProps = {
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  width: 'initial',
  fontSize: 1,
  borderRadius: 3,
  borderColor: 'grayscale.5',
  toggled: false,
  variant: 'secondary',
  size: 'm',
  type: 'button',
};