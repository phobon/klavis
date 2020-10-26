/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { destructureLayoutProps } from "@phobon/base";

import { Tooltip, TooltipProps } from "./Tooltip";

export const withTooltip = <T extends object, U>(
  WrappedComponent: React.ElementType
) =>
  React.forwardRef<T, U & TooltipProps & { as?: React.ElementType }>(
    ({ tooltip, tooltipDirection, offset, as, ...props }, ref) => {
      // If there is no tooltip to display here, then just render the WrappedComponent.
      if (!tooltip) {
        return <WrappedComponent as={as} {...props} />;
      }

      const [
        {
          fullWidth,
          fullHeight,
          position,
          width,
          height,
          size,
          ...layoutProps
        },
        passthroughProps,
      ] = destructureLayoutProps(props);
      return (
        <Tooltip
          tooltip={tooltip}
          tooltipDirection={tooltipDirection}
          position={position || "relative"}
          width={width}
          height={height}
          fullWidth={fullWidth}
          fullHeight={fullHeight}
          size={size}
          {...layoutProps}
        >
          <WrappedComponent
            {...passthroughProps}
            fullWidth={fullWidth}
            fullHeight={fullHeight}
            size={size}
            ref={ref}
            as={as}
          />
        </Tooltip>
      );
    }
  );

withTooltip.defaultProps = {
  tooltipDirection: "down",
  cursor: "pointer",
};
