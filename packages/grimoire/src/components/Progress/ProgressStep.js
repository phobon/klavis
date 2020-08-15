import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import themeGet from '@styled-system/theme-get';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { Box } from '@phobon/base';

import withTooltip from '../Tooltip';

const stepMode = props => {
  const stepModes = {
    compact: css`
      width: ${props.theme.space[2]}px;
      height: ${props.theme.space[2]}px;
      margin: ${props.theme.space[1]}px;
    `,
    full: css`
      width: ${props.theme.space[3]}px;
      height: ${props.theme.space[3]}px;

      > div {
        width: ${props.theme.space[3]}px;
        height: ${props.theme.space[3]}px;
      }

    &::before {
      content: '';
      background-color: ${props.theme.colors.background};
      border-radius: 100%;
      width: 50%;
      height: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 180ms ease-out;
    }
    `,
  };

  return stepModes[props.mode];
};

const isCurrent = props => {
  const currentStates = {
    full: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[5])};
      width: ${props.theme.space[4]}px;
      height: ${props.theme.space[4]}px;

      &::before {
        content: '';
        opacity: 1;
      }

      &::after {
        color: ${props.theme.colors.grayscale[2]};
      }
    `,
    compact: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[5])};
      
      border-radius: 12px;
      width: ${props.orientation === 'horizontal' && `${props.theme.space[3]}px`};
      height: ${props.orientation === 'vertical' && `${props.theme.space[3]}px`};
    `,
  }

  return props.current && currentStates[props.mode];
};

const isComplete = props => {
  const completeStates = {
    full: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[5])};
    `,
    compact: css`
      background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[6])};
    `,
  };

  return props.complete && completeStates[props.mode];
};

const labels = props => props.showLabels && css`
  &::after {
    display: unset;
  }
`;

const ProgressStepButton = styled('button').withConfig({
  shouldForwardProp,
})`
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
  ${isComplete}
  ${isCurrent}
`;

const ProgressStep = ({ children, orientation, alignItems, justifyContent, current, complete, childrenPosition, ...props }) => {
  let top = '50%';  
  if (orientation === 'horizontal') {
    top = current ? 'calc(130% - 6px)' : '130%';
  }

  return (
    <Box css={{ position: 'relative' }} alignItems={alignItems} justifyContent={justifyContent}>
      <ProgressStepButton
        orientation={orientation}
        complete={complete}
        current={current}
        {...props} />
      <span css={`
        position: absolute;
        white-space: pre;
        top: ${top};
        transform: ${orientation === 'vertical' ? 'translateY(-50%)' : null};
        ${childrenPosition === 'right' ? 'left' : 'right'}: ${orientation === 'vertical' ? '150%' : 'unset'};
        opacity: ${!current ? 0.4 : 1};`}>
        {children}
      </span>
    </Box>
  );
};

ProgressStep.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  mode: PropTypes.oneOf(['compact', 'full']),
  current: PropTypes.bool,
  complete: PropTypes.bool,
  childrenPosition: PropTypes.oneOf(['left', 'right']),

  children: PropTypes.node,
  color: PropTypes.string,
  bg: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};

ProgressStep.defaultProps = {
  orientation: 'horizontal',
  mode: 'full',
  current: false,
  complete: false,
  childrenPosition: 'right',

  children: null,
  color: 'accent.5',
  bg: 'grayscale.6',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

export default withTooltip(ProgressStep);