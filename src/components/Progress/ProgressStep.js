import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import withTooltip from '../Tooltip';

const stepMode = props => {
  const stepModes = {
    compact: css`
      width: ${props.theme.space[2]}px;
      height: ${props.theme.space[2]}px;
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
      background-color: ${props => props.theme.colors.background};
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

    &::after {
      content: '${props => props.label}';
      display: none;
      position: absolute;
      bottom: -${props => props.theme.space[4]}px;
      color: ${props => props.theme.colors.grayscale[3]};
      white-space: pre;
      pointer-events: none;
    }
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
      width: ${props.theme.space[3]}px;
    `,
  }

  return props.isCurrent && currentStates[props.mode];
};

const complete = props => {
  const completeStates = {
    full: css`
      background-color: ${props => themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
    `,
    compact: css`
      background-color: ${props => themeGet(`colors.${props.bg}`, props.theme.colors.grayscale[6])};
    `,
  };

  return props.isComplete && completeStates[props.mode];
};

const labels = props => props.showLabels && css`
  &::after {
    display: unset;
  }
`;

const ProgressStep = styled.button`
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