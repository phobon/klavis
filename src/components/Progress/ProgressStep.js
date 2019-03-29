import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import withTooltip from '../Tooltip';

const stepSize = props => {
  const stepSizes = {
    s: css`
      width: ${props.theme.space[3]}px;
      height: ${props.theme.space[3]}px;
      > div {
        width: ${props.theme.space[2]}px;
        height: ${props.theme.space[2]}px;
      }
    `,
    m: css`
      width: ${props.theme.space[4]}px;
      height: ${props.theme.space[4]}px;
      > div {
        width: ${props.theme.space[3]}px;
        height: ${props.theme.space[3]}px;
      }
    `,
    l: css`
      width: ${props.theme.space[5]}px;
      height: ${props.theme.space[5]}px;
      > div {
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
    color: ${props.theme.colors.grayscale[2]};
  }
`;

const labels = props => props.showLabels && css`
  &::after {
    display: unset;
  }
`;

const ProgressStep = styled.button`
  border: 0;
  background-color: ${props => props.theme.colors.grayscale[6]};
  border-radius: 50%;
  position: relative;
  color: white;
  transition: transform 90ms ease-out;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${stepSize}
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
  &:not(:disabled) {
    background-color: ${props => themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
    pointer-events: all;
    cursor: pointer;
  }
  ${labels}
  ${current}
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