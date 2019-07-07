/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { destructureLayoutProps } from '@phobon/base';

import Tooltip from './Tooltip';

const withTooltip = WrappedComponent => ({ tooltip, tooltipDirection, offset, as, ...props }) => {
  // If there is no tooltip to display here, then just render the WrappedComponent.
  if (!tooltip) {
    return (
      <WrappedComponent as={as} {...props} />
    );
  }

  const [{ fullWidth, fullHeight, width, height, position, ...layoutProps}, passthroughProps] = destructureLayoutProps(props);
  return (
    <Tooltip
      tooltip={tooltip}
      tooltipDirection={tooltipDirection}
      offset={offset}
      position={position || 'relative'}
      as={as}
      width={width}
      height={height}
      fullWidth={fullWidth}
      fullHeight={fullHeight}      
      {...layoutProps}
      mr={2}>
      <WrappedComponent {...passthroughProps} fullWidth={fullWidth || width != null} fullHeight={fullHeight || height != null} />
    </Tooltip>
  );
};

withTooltip.propTypes = {
  /** Tooltip */
  tooltip: PropTypes.string,

  /** Direction for the tooltip to open */
  tooltipDirection: PropTypes.oneOf(['left', 'up', 'right', 'down']),

  /** Positional offset */
  offset: PropTypes.number,
};

withTooltip.defaultProps = {
  tooltip: null,
  tooltipDirection: 'down',
  offset: 0,
};

export default withTooltip;