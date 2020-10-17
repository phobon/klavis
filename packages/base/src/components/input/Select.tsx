/* eslint-disable quotes */
/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

import { Input } from "./Input";
import { Box, BoxProps } from "../containers";

import { InputProps } from "./inputProps";

import { destructureLayoutProps } from "../../utils";

const SelectContainer = styled(Box)({
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    right: 4,
    width: 24,
    height: 24,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMinYMid' fill='hsl(216, 6%, 49%)' %3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/%3E%3C/svg%3E")`,
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    pointerEvents: "none",
  },
});

export type SelectProps =
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &
  InputProps &
  BoxProps;

export const Select: React.FunctionComponent<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref: any) => {
    const [layoutProps, passthroughProps] = destructureLayoutProps(props);
    return (
      <SelectContainer {...layoutProps}>
        <Input
          css={{
            "-webkit-appearance": "none",
            minWidth: 150,
          }}
          as={"select"}
          ref={ref}
          fullWidth
          {...passthroughProps}
        />
      </SelectContainer>
    );
  }
);

Select.displayName = "Select";
