/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { themeGet, color as styledColor } from 'styled-system';
import styled, { css } from 'styled-components';
import { Flex, BoxList, BoxListItem } from '@phobon/base';

import ProgressStep from './ProgressStep';

const isComplete = props => props.complete && css`
  opacity: 1;
`;
const barOrientation = props => {
  const orientations = {
    horizontal: css`
      height: ${props.theme.space[2]}px;

      &::before {
        width: calc(100% + 4px);
        height: 100%;
      }
    `,
    vertical: css`
      width: ${props.theme.space[2]}px;

      &::before {
        height: calc(100% + 4px);
        width: 100%;
      }
    `,
  };

  return orientations[props.orientation];
};
const PercentageBar = styled(Flex)`
  position: relative;
  pointer-events: none;

  ${barOrientation}

  &::before {
    content: '';
    position: absolute;
    background-color: ${props => themeGet(`colors.${props.color}`, props.theme.colors.accent[3])};
    opacity: 0;
    ${isComplete}
    transition: opacity 180ms ease-out;
  }
`;

const Progress = ({ id, children, mode, fontSize, color, bg, orientation, ...props }) => {
  let currentShown = false;
  let currentIndex = 0;

  const mappedChildren = React.Children.map(children, (step, i) => {
    if (!step) {
      return null;
    }

    const { tooltip, onClick, current, ...stepProps } = step.props;

    const isLast = i === children.length - 1;
    if (current) {
      currentShown = true;
      currentIndex = i;
    }

    const complete = !currentShown;
    return (
      <BoxListItem key={`${id}__step${i}`} flex={!isLast && mode === 'full' ? '1 1 auto' : 'none'} flexDirection="inherit">
        <ProgressStep
          {...stepProps}
          orientation={orientation}
          current={current}
          complete={complete}
          disabled={current || !complete}
          tooltip={tooltip}
          color={color}
          bg={bg}
          mode={mode}
          fontSize={fontSize}
          onClick={onClick}>
          {mode === 'full' && (
            step.props.children
          )}
        </ProgressStep>

        {!isLast && mode === 'full' && <PercentageBar complete={complete} color={color} bg={bg} orientation={orientation} />}
      </BoxListItem>
    );
  }).filter(n => n);

  return (
    <BoxList
      flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
      fullWidth={mode === 'full' && orientation === 'horizontal'}
      fullHeight={mode === 'full' && orientation === 'vertical'}
      justifyContent={mode === 'compact' ? 'space-between' : 'center'}
      {...props}
      role="progressbar"
      aria-valuenow={(currentIndex / children.length) * 100}
      aria-valuemin="0"
      aria-valuemax="100">
      {mappedChildren}
    </BoxList>
  )
};

Progress.propTypes = {
  ...styledColor.propTypes,

  id: PropTypes.string.isRequired,

  mode: PropTypes.oneOf(['compact', 'full']),
  color: PropTypes.string,
  fontSize: PropTypes.number,

  bg: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

Progress.defaultProps = {
  mode: 'full',
  color: 'accent.5',
  fontSize: 0,
  bg: 'grayscale.6',
  orientation: 'horizontal',
};

export default Progress;