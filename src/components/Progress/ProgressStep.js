import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import withTooltip from '../Tooltip';

const stepOrientation = props => {
  const orientations = {
    horizontal: css`
      &::after {
        bottom: -${props.theme.space[4]}px;
      }
    `,
    vertical: css`
      &::after {
        left: ${props.theme.space[6]}px;
      }
    `,
  };

  return orientations[props.orientation];
};

const stepMode = props => {
  const stepModes = {
    compact: css`
      width: ${props.theme.space[2]}px;
      height: ${props.theme.space[2]}px;
      margin: ${props.theme.space[1]}px;
    `,
    full: css`
      width: ${props.theme.space[4]}px;
      height: ${props.theme.space[4]}px;
      > div {
        width: ${props.theme.space[3]}px;
        height: ${props.theme.space[3]}px;
      }

    &::before {
      content: '';
      background-color: ${props.theme.colors.background};
      border-radius: 100%;
      width: 55%;
      height: 55%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 180ms ease-out;
    }

    /* &::after {
      content: '${props.label}';
      display: none;
      position: absolute;
      color: ${props.theme.colors.grayscale[3]};
      white-space: pre;
      pointer-events: none;
    }

    ${stepOrientation} */
    `,
  };

  return stepModes[props.mode];
};

const current = props => {
  const currentStates = {
    full: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
      
      &::before {
        content: '';
        opacity: 1;
      }

      &::after {
        color: ${props.theme.colors.grayscale[2]};
      }
    `,
    compact: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
      
      border-radius: 12px;
      width: ${props.orientation === 'horizontal' && `${props.theme.space[3]}px`};
      height: ${props.orientation === 'vertical' && `${props.theme.space[3]}px`};
    `,
  }

  return props.isCurrent && currentStates[props.mode];
};

const complete = props => {
  const completeStates = {
    full: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
    `,
    compact: css`
      background-color: ${themeGet(`colors.${props.bg}`, props.theme.colors.grayscale[6])};
    `,
  };

  return props.isComplete && completeStates[props.mode];
};

const labels = props => props.showLabels && css`
  &::after {
    display: unset;
  }
`;

const ProgressStepButton = styled.button`
  border: 0;
  padding: 0;
  background-color: ${props => themeGet(`colors.${props.bg}`, props.theme.colors.grayscale[6])};
  border-radius: 50%;
  position: relative;
  color: white;
  transition: transform 90ms ease-out, color 90ms ease-out;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  ${stepMode}

  &:not(:disabled) {
    pointer-events: all;
    cursor: pointer;
  }

  ${labels}
  ${complete}
  ${current}
`;

const ProgressStep = ({ children, ...props }) => (
  <ProgressStepButton {...props}>
    {children}
  </ProgressStepButton>
)

ProgressStep.propTypes = {
  mode: PropTypes.oneOf(['compact', 'full']),
};

ProgressStep.defaultProps = {
  mode: 'full',
  color: 'accent.3',
  bg: 'grayscale.6',
  fontSize: 0,
};

export default withTooltip(ProgressStep);