/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { Box } from '@phobon/base'

const variantColour = props => {
  const variants = {
    info: css`
      background-color: ${props.theme.colors.guidance.info[1]};
      color: ${props.theme.colors.guidance.info[0]};
      fill: ${props.theme.colors.guidance.info[0]};
    `,
    question: css`
      background-color: ${props.theme.colors.purples[8]};
      color: ${props.theme.colors.purples[0]};
      fill: ${props.theme.colors.purples[0]};
    `,
    success: css`
      background-color: ${props.theme.colors.guidance.success[1]};
      color: ${props.theme.colors.guidance.success[0]};
      fill: ${props.theme.colors.guidance.success[0]};
    `,
    warning: css`
      background-color: ${props.theme.colors.guidance.warning[1]};
      color: ${props.theme.colors.guidance.warning[0]};
      fill: ${props.theme.colors.guidance.warning[0]};
    `,
    error: css`
      background-color: ${props.theme.colors.guidance.error[1]};
      color: ${props.theme.colors.guidance.error[0]};
      fill: ${props.theme.colors.guidance.error[0]};
    `,
    neutral: css`
      background-color: ${props.theme.colors.background};
      color: ${props.theme.colors.foreground};
      fill: ${props.theme.colors.foreground};
    `,
    dark: css`
      background-color: ${props.theme.colors.grayscale[3]};
      color: ${props.theme.colors.white};
      fill: ${props.theme.colors.white};
    `,
  };

  return variants[props.variant];
};

const MessageContainer = styled(Box).attrs(props => ({
  'aria-live': props.variant === 'error' || props.variant === 'warning' ? 'assertive' : 'polite',
}))`
  ${variantColour}

  > svg {
    margin-right: ${props => props.theme.space[3]}px;
  }
`;

const Message = forwardRef(({ children, variant, glyph, ...props }, ref) => (
  <MessageContainer
    variant={variant}
    role="alert"
    ref={ref}
    {...props}>
    {glyph}
    <Box flex={1} color="inherit" bg="inherit" justifyContent="flex-start" flexDirection="column" alignItems="flex-start">
      {children}
    </Box>
  </MessageContainer>
));

Message.displayName = 'Message';

Message.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.borderRadius,

  /** Message variant */
  variant: PropTypes.oneOf(['info', 'question', 'success', 'warning', 'error', 'neutral', 'dark']),

  /** An optional glyph */
  glyph: PropTypes.node,
};

Message.defaultProps = {
  fontSize: 1,
  p: 3,
  borderRadius: 3,
  flex: '1',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  variant: 'neutral',
  glyph: null,
};

export default Message;