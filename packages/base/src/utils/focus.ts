import { CSSObject, InterpolationFunction } from "styled-components";

// TODO: theme typing
export const focus = ({ theme }: any): CSSObject | InterpolationFunction<any> | TemplateStringsArray => ({
  '&:focus': {
    outline: 0,
    '&::after': {
      position: 'absolute',
      top: -2,
      left: -2,
      right: -2,
      bottom: -2,
      content: '""',
      boxShadow: `0 0 0 2px ${theme.colors.guidance.focus}`,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      zIndex: 1,
    },
  },
});