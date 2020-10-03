import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { compose, space, layout, position } from "styled-system";
import propTypes from "@styled-system/prop-types";
import { cover, shouldForwardProp } from "@phobon/base";

const direction = (props) => {
  const tooltipDirections = {
    down: css`
      &::after {
        left: 50%;
        top: ${`calc(100% + ${props.theme.space[1]}px)`};
        transform: translate(-50%, var(--factor));
      }
      &:hover,
      &:focus,
      &:focus-within {
        &::after {
          transform: ${`translate(-50%, calc(var(--factor) - ${props.theme.space[1]}px))`};
        }
      }
    `,
    up: css`
      &::after {
        left: 50%;
        bottom: ${`calc(100% + ${props.theme.space[1]}px)`};
        transform: translate(-50%, var(--minusfactor));
      }
      &:hover,
      &:focus,
      &:focus-within {
        &::after {
          transform: ${`translate(-50%, calc(var(--minusfactor) + ${props.theme.space[1]}px))`};
        }
      }
    `,
    left: css`
      &::after {
        top: 50%;
        left: 0;
        transform: translate(calc(-100% - var(--xfactor)), -50%);
      }
      &:hover,
      &:focus,
      &:focus-within {
        &::after {
          transform: translate(calc(-100% - var(--factor)), -50%);
        }
      }
    `,
    right: css`
      &::after {
        top: 50%;
        right: 0;
        transform: translate(calc(100% + var(--xfactor)), -50%);
      }
      &:hover,
      &:focus,
      &:focus-within {
        &::after {
          transform: translate(calc(100% + var(--factor)), -50%);
        }
      }
    `,
  };

  return tooltipDirections[props.tooltipDirection];
};

const tooltipStyles = compose(layout, position, space);

const Tooltip = styled("div", {
  shouldForwardProp,
})`
  ${tooltipStyles}

  --factor: ${(props) =>
    props.theme.space[1] + props.theme.space[props.offset]}px;
  --minusfactor: -${(props) =>
    props.theme.space[1] + props.theme.space[props.offset]}px;
  --xfactor: ${(props) =>
    props.theme.space[2] + props.theme.space[props.offset]}px;

  &::after {
    content: '${(props) => props.tooltip}';
    background-color: ${(props) => props.theme.colors.grayscale[1]};
    padding: ${(props) =>
      `${props.theme.space[1]}px ${props.theme.space[2]}px`};
    color: ${(props) => props.theme.colors.background};
    border-radius: ${(props) => props.theme.radii[3]}px;
    font-size: ${(props) => props.theme.fontSizes[0]}px;
    position: absolute;
    opacity: 0;
    transition: opacity 80ms ease-out, transform 80ms ease-out;
    pointer-events: none;
    z-index: 1;
    white-space: pre;
    display: inline-table;
    /* will-change: transform; */
  }

  &:hover, &:focus, &:focus-within {
    &::after {
      opacity: 1;
    }
  }

  ${direction}
`;

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...cover.propTypes,

  tooltip: PropTypes.string,
  tooltipDirection: PropTypes.oneOf(["down", "up", "left", "right"]),
  offset: PropTypes.number,
};

Tooltip.defaultProps = {
  tooltip: null,
  tooltipDirection: "down",
  position: "relative",
  offset: 0,
};

export default Tooltip;
