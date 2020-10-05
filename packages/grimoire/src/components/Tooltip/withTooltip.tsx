/* eslint-disable react/prop-types */
import React from 'react';
import { destructureLayoutProps } from '@phobon/base';

import { Tooltip, TooltipProps } from './Tooltip';

export const withTooltip = (WrappedComponent: any): React.FunctionComponent<TooltipProps & any> => ({ tooltip, tooltipDirection, offset, as, ...props }) => {
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
      {...layoutProps}>
      <WrappedComponent {...passthroughProps} fullWidth={fullWidth || width != null} fullHeight={fullHeight || height != null} />
    </Tooltip>
  );
};

withTooltip.defaultProps = {
  tooltip: null,
  tooltipDirection: 'down',
  offset: 0,
};