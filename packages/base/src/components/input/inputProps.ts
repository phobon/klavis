import {
  compose,
  color,
  space,
  border,
  fontSize as styledFontSize,
  width,
  ColorProps,
  SpaceProps,
  BorderProps,
  FontSizeProps,
  WidthProps,
} from "styled-system";

import {
  density,
  fullWidth,
  fullHeight,
  cover,
  DensityProps,
  FullWidthProps,
  FullHeightProps,
  CoverProps,
} from "../../utils";

export const inputSystem = compose(
  color,
  space,
  border,
  styledFontSize,
  width,
  fullWidth,
  fullHeight,
  cover,
  density
);

export interface IInputProps {
  variant?: "text" | "number" | "password" | "email";
  invalid?: React.ReactNode;
  disabled?: boolean;
  hideBrowserChrome?: boolean;
}

export type InputProps = IInputProps &
  ColorProps &
  SpaceProps &
  BorderProps &
  FontSizeProps &
  WidthProps &
  DensityProps &
  FullWidthProps &
  FullHeightProps &
  CoverProps;

export const inputStyles: any = (props: any) => ({
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  padding: props.theme.space[2],
  lineHeight: `${props.theme.fontSizes[props.fontSize as number]}px`,
  transition: "border-color 90ms ease-out",
  "&::-webkit-input-placeholder": {
    color: props.theme.colors.grayscale[5],
  },
  "&:focus": {
    outline: 0,
    borderColor: props.theme.colors.guidance.focus,
  },
  "&:disabled": {
    opacity: 0.2,
    pointerEvents: "none",
    backgroundColor: props.theme.colors.grayscale[7],
    borderColor: props.theme.colors.grayscale[6],
  },
  '&[aria-invalid="true"]': {
    borderColor: props.theme.colors.reds[5],
    "&:hover": {
      borderColor: props.theme.colors.reds[7],
    },
  },
});

export const defaultProps: any = {
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: "grayscale.9",
  border: "2px solid",
  color: "foreground",
  borderColor: "grayscale.7",
  density: "normal",
};
