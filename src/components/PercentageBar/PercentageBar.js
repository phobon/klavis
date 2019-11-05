/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { color } from 'styled-system';

import { Box } from '@phobon/base';

import Tag from '../Tag';

const thresholdBg = props => {
  if (props.percentage < props.dangerThreshold) {
    return css`background-color: ${props.theme.colors.reds[5]};`;
  }

  if (props.percentage < props.warningThreshold) {
    return css`background-color: ${props.theme.colors.oranges[6]};`;
  }

  return css`background-color: ${props.theme.colors.greens[5]};`;
};

const heights = props => {
  const heightValues = {
    s: css`height: ${props.theme.space[1]}px;`,
    m: css`height: ${props.theme.space[2]}px;`,
    l: css`height: ${props.theme.space[3]}px;`,
  };

  return heightValues[props.size];
};

const PercentageBarElement = styled.div.attrs(props => ({
  progressTranslate: `translateX(-${100 - props.percentage}%)`,
}))`
  ${color}
  position: relative;
  border-radius: ${props => props.theme.radii[4]}px;
  ${heights}
  display: flex;
  flex: 1 0 0%;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    border-radius: ${props => props.theme.radii[4]}px;
    transform: ${props => props.progressTranslate};
    transform-origin: 0 50%;
    transition: transform 100ms ease-out;
    ${thresholdBg}
    z-index: 1;
  }
`;

const PercentageBar = ({
  heading,
  total,
  complete,
  dangerThreshold,
  warningThreshold,
  showPercentage,
  size,
  bg,
  ...props
}) => {
  const rawPercentage = complete / total;
  const percentage = rawPercentage * 100;
  const percentageString = `${percentage}%`;

  return (
    <Box
      fullWidth
      {...props}
      flexDirection="column"
      alignItems="flex-start"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100">
      {heading}
      <Box fullWidth>
        <PercentageBarElement
          rawPercentage={rawPercentage}
          percentage={percentage}
          dangerThreshold={dangerThreshold}
          warningThreshold={warningThreshold}
          size={size}
          bg={bg} />
        {showPercentage && (
          <Tag ml={2} bg="grayscale.1" color="background">{percentageString}</Tag>
        )}
      </Box>
    </Box>
  )
};

PercentageBar.propTypes = {
  /** Optional heading slot */
  heading: PropTypes.node,

  /** Number of complete items */
  complete: PropTypes.number.isRequired,

  /** Total number of items */
  total: PropTypes.number.isRequired,

  /** Threshold when percentage complete dips below a dangerous amount */
  dangerThreshold: PropTypes.number,

  /** Threshold when percentage complete dips below a warning amount */
  warningThreshold: PropTypes.number,

  /** Size of the progress bar */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /** Show associated percentage */
  showPercentage: PropTypes.bool,
};

PercentageBar.defaultProps = {
  heading: null,
  dangerThreshold: 30,
  warningThreshold: 70,
  size: 'm',
  showPercentage: false,
  bg: 'grayscale.7',
};

export default PercentageBar;
