import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Error from 'rmdi/lib/Error';
import Help from 'rmdi/lib/Help';
import CheckCircle from 'rmdi/lib/CheckCircle';

import { Flex } from '@phobon/base';

const SeverityGlyph = ({ severity, ...props }) => {
  const severities = {
    info: <Help color="blues.5" mr={3} {...props} />,
    success: <CheckCircle color="greens.5" mr={3} {...props} />,
    warning: <Error color="oranges.5" mr={3} {...props} />,
    error: <Error color="reds.5" mr={3} {...props} />,
  };

  return severities[severity];
};

const severity = props => {
  const severities = {
    info: css`
      border-left: 4px solid ${props.theme.colors.blues[6]};
    `,
    success: css`
      border-left: 4px solid ${props.theme.colors.greens[6]};
    `,
    warning: css`
      border-left: 4px solid ${props.theme.colors.oranges[6]};
    `,
    error: css`
      border-left: 4px solid ${props.theme.colors.reds[6]};
    `,
  };

  return props.showSeverity && severities[props.severity];
};

const FlagContainer = styled(Flex)`
  ${severity}
`;

/**
A compositional message component
*/
const Flag = ({ children, severity, showSeverity, ...props }) => (
  <FlagContainer justifyContent="flex-start" alignItems="flex-start" severity={severity} showSeverity={showSeverity} {...props}>
    {showSeverity && <SeverityGlyph severity={severity} size={28} />}
    <Flex justifyContent="flex-start" flexDirection="column" alignItems="flex-start" mt="2px">
      {children}
    </Flex>
  </FlagContainer>
);

Flag.propTypes = {
  ...Flex.propTypes,

  children: PropTypes.node,
  severity: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  showSeverity: PropTypes.bool,
};

Flag.defaultProps = {
  children: null,
  severity: 'info',
  showSeverity: true,
  pl: 3,
  pr: 4,
  py: 3,
  fullWidth: true,
};

export default Flag;