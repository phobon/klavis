/* eslint-disable react/default-props-match-prop-types */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, fontSize, borderRadius } from 'styled-system';
import React from 'react';
import { flexbox, Flex } from '@phobon/base'

const variationColour = props => {
  const severities = {
    info: css`
      background-color: ${props.theme.colors.blues[9]};
      color: ${props.theme.colors.blues[0]};
      stroke: ${props.theme.colors.blues[0]};
      /* background-color: ${props.theme.colors.guidance.info[1]};
      color: ${props.theme.colors.guidance.info[0]}; */
    `,
    question: css`
      background-color: ${props.theme.colors.purples[9]};
      color: ${props.theme.colors.purples[0]};
      stroke: ${props.theme.colors.purples[0]};
      /* background-color: ${props.theme.colors.guidance.info[1]};
      color: ${props.theme.colors.guidance.info[0]}; */
    `,
    success: css`
      background-color: ${props.theme.colors.greens[9]};
      color: ${props.theme.colors.greens[0]};
      stroke: ${props.theme.colors.greens[0]};
      /* background-color: ${props.theme.colors.guidance.success[1]};
      color: ${props.theme.colors.guidance.success[0]}; */
    `,
    warning: css`
      background-color: ${props.theme.colors.oranges[9]};
      color: ${props.theme.colors.oranges[0]};
      stroke: ${props.theme.colors.oranges[0]};
      /* background-color: ${props.theme.colors.guidance.warning[1]};
      color: ${props.theme.colors.guidance.warning[0]}; */
    `,
    error: css`
      background-color: ${props.theme.colors.reds[9]};
      color: ${props.theme.colors.reds[0]};
      stroke: ${props.theme.colors.reds[0]};
      /* background-color: ${props.theme.colors.guidance.error[1]};
      color: ${props.theme.colors.guidance.error[0]}; */
    `,
    neutral: css`
      background-color: ${props.theme.colors.background};
      color: ${props.theme.colors.foreground};
      stroke: ${props.theme.colors.foreground};
    `,
    dark: css`
      background-color: ${props.theme.colors.grayscale[3]};
      color: ${props.theme.colors.white};
      stroke: ${props.theme.colors.white};
    `,
  };

  return severities[props.variation];
};

const MessageContainer = styled.div`
  display: flex;

  ${flexbox}
  ${space}
  ${fontSize}
  ${borderRadius}
  ${variationColour}

  > svg {
    margin-right: ${props => props.theme.space[3]}px;
  }
`;

const Message = ({ children, variation, glyph, ...props }) => (
  <MessageContainer variation={variation} {...props}>
    {glyph}
    <Flex color="inherit" bg="inherit" justifyContent="flex-start" flexDirection="column" alignItems="flex-start">
      {children}
    </Flex>
  </MessageContainer>
);

Message.displayName = 'Message';

Message.propTypes = {
  ...flexbox.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...borderRadius.propTypes,

  /** Message variation */
  variation: PropTypes.oneOf(['info', 'question', 'success', 'warning', 'error', 'neutral', 'dark']),

  /** An optional glyph */
  glyph: PropTypes.node,
};

Message.defaultProps = {
  fontSize: 1,
  py: 2,
  px: 3,
  borderRadius: 3,
  flex: '1',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  variation: 'neutral',
  glyph: null,
};

export default Message;
