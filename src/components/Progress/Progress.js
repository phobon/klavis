import React from 'react';
import PropTypes from 'prop-types';
import { themeGet, color as styledColor } from 'styled-system';
import styled, { css } from 'styled-components';
import { Flex, BoxList, BoxListItem, Box } from '@phobon/base';

import ProgressStep from './ProgressStep';

const complete = props => props.isComplete && css`
  opacity: 1;
`;
const PercentageBar = styled(Flex)`
  position: relative;
  pointer-events: none;
  height: ${props => props.theme.space[2]}px;

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

const Progress = ({ children, completeGlyph, showLabels, mode, fontSize, color, bg, ...props }) => {
  let isCurrentShown = false;
  const mappedChildren = React.Children.map(children, (step, i, array) => {
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
      <BoxListItem key={label} flex={!isLast && mode === 'full' ? '1 1 auto' : 'none'}>
        <ProgressStep
          {...stepProps}
          label={label}
          isCurrent={isCurrent}
          isComplete={isComplete}
          disabled={isCurrent || !isComplete}
          showLabels={showLabels}
          tooltip={!showLabels && label}
          color={color}
          bg={bg}
          mode={mode}
          fontSize={fontSize}
          onClick={onClick}>
          {isComplete && mode === 'full' && (
            <Box color="white">
              {completeGlyph}
            </Box>
          )}
        </ProgressStep>

        {!isLast && mode === 'full' && <PercentageBar isComplete={isComplete} color={color} bg={bg} />}
      </BoxListItem>
    );
  }).filter(n => n);

  return (
    <BoxList fullWidth={mode === 'full'} justifyContent={mode === 'compact' ? 'space-between' : 'center'} {...props}>
      {mappedChildren}
    </BoxList>
  )
};

Progress.propTypes = {
  ...styledColor.propTypes,

  mode: PropTypes.oneOf(['compact', 'full']),
  showLabels: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,

  bg: PropTypes.string,
};

Progress.defaultProps = {
  mode: 'full',
  showLabels: true,
  color: 'accent.3',
  fontSize: 0,
  bg: 'grayscale.6',
};

export default Progress;