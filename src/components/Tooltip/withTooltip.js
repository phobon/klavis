import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import { destructureLayoutProps } from '@phobon/base';

const withTooltip = WrappedComponent => ({ tooltip, tooltipDirection, offset, as, ...props }) => {
  // If there is no tooltip to display here, then just render the WrappedComponent.
  if (!tooltip) {
    return (
      <WrappedComponent as={as} {...props} />
    );
  }

  const { fullWidth, fullHeight, position } = props;

  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  return (
    <Tooltip tooltip={tooltip} tooltipDirection={tooltipDirection} offset={offset} position={position || 'relative'} as={as} {...layoutProps}>
      <WrappedComponent {...passthroughProps} fullWidth={fullWidth} fullHeight={fullHeight} />
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