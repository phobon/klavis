import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  space,
  borderRadius,
  gridColumn,
  gridRow,
  gridArea,
  themeGet,
} from 'styled-system';
import { position, focus } from '@phobon/base'

import Remove from 'sli/lib/Remove';

import withTooltip from '../Tooltip';

const toggleSize = props => {
  const sizes = {
    s: css`
      width: ${props.theme.space[5]}px;
      height: ${props.theme.space[3]}px;
      padding-right: 4px;

      &::before {
        width: 10px;
        height: 10px;
      }
    `,
    m: css`
      width: ${props.theme.space[6]}px;
      height: ${props.theme.space[4]}px;
      padding-right: 6px;

      &::before {
        width: 18px;
        height: 18px;
      }
    `,
  };

  return sizes[props.size];
};

const ToggleButton = styled.button`
  display: flex;
  box-sizing: border-box;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  border: 0;

  cursor: pointer;

  transition:
    opacity 120ms ease-out,
    background-color 120ms ease-out;

  ${space}
  ${borderRadius}
  ${position}
  ${gridColumn}
  ${gridRow}
  ${gridArea}

  ${toggleSize}

  stroke: ${props => props.theme.colors.background};

  &::before {
    content: '';
    border-radius: 50%;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 180ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  &[aria-checked="true"] {
    background-color: ${props => themeGet(`colors.${props.bg[0]}`)(props)};

    &:hover {
      background-color: ${props => themeGet(`colors.${props.bg[1]}`)(props)};
    }

    &::before {
      transform: translateX(24px);
    }
  }

  &[aria-checked="false"] {
    background-color: ${props => props.theme.colors.grayscale[4]};

    &:hover {
      background-color: ${props => props.theme.colors.grayscale[3]};
    }

    &::before {
      transform: translateX(0);
    }
  }

  ${focus}

  &:disabled {
    opacity: 0.5;

    background-color: ${props => props.theme.colors.grayscale[6]};

    &::before {
      background-color: ${props => props.theme.colors.grayscale[5]};
    }

    stroke: ${props => props.theme.colors.grayscale[5]};
    pointer-events: none;
  }
`;

const Toggle = ({ toggled, disabled, size, ...props }) => (
  <ToggleButton
    aria-checked={toggled}
    aria-readonly={disabled}
    disabled={disabled}
    borderRadius={5}
    size={size}
    role="switch"
    {...props}>
    {!toggled && <Remove color="inherit" size={size === 'm' ? 16 : 10} css={{ strokeWidth: 3 }} />}
  </ToggleButton>
);

Toggle.propTypes = {
  ...space.propTypes,
  ...borderRadius.propTypes,
  ...position.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridArea.propTypes,

  size: PropTypes.oneOf(['s', 'm']),
  toggled: PropTypes.bool,
  bg: PropTypes.arrayOf(PropTypes.string),
};

Toggle.defaultProps = {
  size: 'm',
  toggled: false,
  bg: ['greens.6', 'greens.5'],
};

Toggle.displayName = 'Toggle';

export default withTooltip(Toggle);
