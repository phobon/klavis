import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import { Flex, BoxList, BoxListItem } from '@phobon/base';

import ProgressStep from './ProgressStep';

const complete = props => props.isComplete && css`
  opacity: 1;
`;
const barSize = props => {
  const barSizes = {
    s: css`
      height: ${props.theme.space[1]}px;
    `,
    m: css`
      height: ${props.theme.space[2]}px;
    `,
    l: css`
    height: ${props.theme.space[2]}px;
  `,
  };

  return barSizes[props.size];
};
const PercentageBar = styled(Flex)`
  position: relative;
  pointer-events: none;
  ${barSize}

  &::before {
    content: '';
    width: calc(100% + 4px);
    height: 100%;
    position: absolute;
    background-color: ${props => themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
    opacity: 0;
    ${complete}
    transition: opacity 180ms ease-out;
  }
`;

const Progress = ({ children, completeGlyph, showLabels, size, fontSize, color, bg, ...props }) => {
  let isCurrentShown = false;
  const mappedChildren = children.map((step, i, array) => {
    if (!step) {
      return null;
    }

    const { label, onClick, isCurrent, ...stepProps } = step.props;
    
    const isLast = i === array.length - 1;
    if (isCurrent) {
      isCurrentShown = true;
    }

    const isComplete = !isCurrentShown;
    return (
      <BoxListItem key={label} flex={!isLast ? '1 1 auto' : 'none'}>
        <ProgressStep
          {...stepProps}
          label={label}
          isCurrent={isCurrent}
          isComplete={isComplete}
          showLabels={showLabels}
          tooltip={!showLabels && label}
          color={color}
          bg={bg}
          size={size}
          fontSize={fontSize}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}>
          {isComplete && completeGlyph}
        </ProgressStep>

        {!isLast && <PercentageBar isComplete={isComplete} size={size} color={color} bg={bg} />}
      </BoxListItem>
    );
  }).filter(n => n);

  return (
    <BoxList fullWidth {...props}>
      {mappedChildren}
    </BoxList>
  )
};

Progress.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  showLabels: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

Progress.defaultProps = {
  size: 'm',
  showLabels: true,
  color: 'accent.3',
  fontSize: 0,
  bg: 'grayscale.6',
};

export default Progress;