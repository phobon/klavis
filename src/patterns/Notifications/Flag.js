import React from 'react';
import PropTypes from 'prop-types';

import Error from 'rmdi/lib/Error';
import Help from 'rmdi/lib/Help';
import CheckCircle from 'rmdi/lib/CheckCircle';

import { Flex, Truncate } from '@phobon/base';

const SeverityGlyph = ({ severity, ...props }) => {
  const severities = {
    info: <Help color="blues.3" mr={3} {...props} />,
    success: <CheckCircle color="greens.3" mr={3} {...props} />,
    warning: <Error color="oranges.3" mr={3} {...props} />,
    error: <Error color="reds.3" mr={3} {...props} />,
  };

  return severities[severity];
};

/**
A compositional message component
*/
const Flag = ({ heading, children, severity, ...props }) => {
  return (
    <Flex justifyContent="flex-start" {...props}>
      {severity && <SeverityGlyph severity={severity} size={28} alignSelf="flex-start" />}
      <Flex justifyContent="flex-start" flexDirection="column" alignItems="flex-start">
        {heading && (
          <Truncate fontWeight="bold" fontSize={2} mb={2} color="grayscale.1">{heading}</Truncate>
        )}
        {children}
      </Flex>
    </Flex>
  );
};

Flag.propTypes = {
  heading: PropTypes.string,

  children: PropTypes.node,
  
  severity: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

Flag.defaultProps = {
  heading: null,
  children: null,
  severity: 'info',
};

export default Flag;