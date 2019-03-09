import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '@phobon/base';

const direction = props => {
  const tooltipDirections = {
    'down': css`
      &::after {
        left: 50%;
        transform: translate(-50%, calc(75% + var(--factor)));
      }

      &:hover, &:focus, &:focus-within {
        &::after {
          transform: translate(-50%, calc(75% + var(--offset)));
        }
      }
    `,
    'up': css`
      &::after {
        left: 50%;
        transform: translate(-50%, calc(-175% - var(--factor)));
      }

      &:hover, &:focus, &:focus-within {
        &::after {
          transform: translate(-50%, calc(-175% - var(--offset)));
        }
      }
    `,
    'left': css`
      &::after {
        left: 0;
        transform: translate(calc(-100% - var(--xfactor)), -50%);
      }

      &:hover, &:focus, &:focus-within {
        &::after {
          transform: translate(calc(-100% - var(--factor)), -50%);
        }
      }
    `,
    'right': css`
      &::after {
        right: 0;
        transform: translate(calc(100% + var(--xfactor)), -50%);
      }

      &:hover, &:focus, &:focus-within {
        &::after {
          transform: translate(calc(100% + var(--factor)), -50%);
        }
      }
    `,
  };

  return tooltipDirections[props.tooltipDirection];
};

const Tooltip = styled(Box)`
  --factor: ${props => props.theme.space[1] + props.theme.space[props.offset]}px;
  --xfactor: ${props => props.theme.space[2] + props.theme.space[props.offset]}px;
  --offset: ${props => props.theme.space[props.offset]}px;

  &::after {
    content: '${props => props.tooltip}';
    background-color: ${props => props.theme.colors.grayscale[1]};
    padding: ${props => `${props.theme.space[1]}px ${props.theme.space[2]}px`};
    color: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.radii[3]}px;
    font-size: ${props => props.theme.fontSizes[0]}px;
    position: absolute;
    opacity: 0;
    transition: opacity 80ms ease-out, transform 80ms ease-out;
    pointer-events: none;
    z-index: 1;
    white-space: pre;
    display: inline-table;
    /* will-change: transform; */
    top: 50%;
  }

  &:hover, &:focus, &:focus-within {
    &::after {
      opacity: 1;
    }
  }

  ${direction}
`;

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  tooltip: PropTypes.string,
  tooltipDirection: PropTypes.oneOf(['down', 'up', 'left', 'right']),
  offset: PropTypes.number,
};

Tooltip.defaultProps = {
  tooltip: null,
  tooltipDirection: 'down',
  position: 'relative',
  offset: 0,
};

export default Tooltip;