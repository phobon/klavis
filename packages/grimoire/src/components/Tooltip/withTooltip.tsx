/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { RefAttributes } from "react";
import { destructureLayoutProps } from "@phobon/base";

import { Tooltip, TooltipProps } from "./Tooltip";

type ExtractProps<T> = T extends React.FunctionComponent<infer X> ? X : never;
type ExtractRefType<T> = T extends React.FunctionComponent<infer X> ? X extends RefAttributes<infer R> ? R : never : never;

export const withTooltip = <T extends ExtractRefType<V>, V extends React.ElementType>(
  WrappedComponent: V
) =>
  React.forwardRef<T, ExtractProps<V> & TooltipProps & { as?: React.ElementType }>(
    ({ tooltip, tooltipDirection, offset, as, ...props }, ref) => {
      // If there is no tooltip to display here, then just render the WrappedComponent.
      if (!tooltip) {
        return <WrappedComponent as={as} ref={ref} {...props} />;
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
