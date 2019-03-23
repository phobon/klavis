import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { Box } from '@phobon/base';
import withTooltip from '../Tooltip';

const stepSize = props => {
  const stepSizes = {
    s: css`
      width: ${props.theme.space[3]}px;
      height: ${props.theme.space[3]}px;

      > svg {
        width: ${props.theme.space[2]}px;
        height: ${props.theme.space[2]}px;
      }
    `,
    m: css`
      width: ${props.theme.space[4]}px;
      height: ${props.theme.space[4]}px;

      > svg {
        width: ${props.theme.space[3]}px;
        height: ${props.theme.space[3]}px;        
      }
    `,
    l: css`
    width: ${props.theme.space[5]}px;
    height: ${props.theme.space[5]}px;

    > svg {
        width: ${props.theme.space[3]}px;
        height: ${props.theme.space[3]}px;
      }
  `,
  };

  return stepSizes[props.size];
};
const current = props => props.isCurrent && css`
  background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};

  &::before {
    content: '';
    opacity: 1;
  }

  &::after {
    color: ${props => props.theme.colors.grayscale[2]};
  }
`;
const complete = props => props.isComplete && css`
  background-color: ${themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
`;

const labels = props => props.showLabels && css`
  &::after {
    display: unset;
  }
`;

const ProgressStep = styled(Box)`
  border-radius: 50%;
  position: relative;
  color: white;
  transition: transform 90ms ease-out;

  ${stepSize}

  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
    left: 50%;
    transform: translateX(-50%);
    bottom: -${props => props.theme.space[4]}px;
    color: ${props => props.theme.colors.grayscale[3]};
    white-space: pre;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${labels}
  ${current}
  ${complete}
`;

ProgressStep.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

ProgressStep.defaultProps = {
  size: 'm',
  color: 'accent.3',
  fontSize: 0,
};

export default withTooltip(ProgressStep);