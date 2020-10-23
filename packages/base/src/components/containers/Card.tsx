import styled from "@emotion/styled";

import { containerStyles } from "./containerProps";

import { stackSystem, StackProps } from "./Stack";

const boxShadow = ({ boxShadowSize = "l", theme }: any) => {
  const boxShadows = {
    none: 0,
    s: 0,
    m: 1,
    l: 2,
    xl: 3,
    xxl: 4,
  };

  return {
    "&::before": {
      boxShadow: theme.boxShadows[boxShadows[boxShadowSize]],
    },
  };
};

export type BoxShadowSize = "none" | "s" | "m" | "l" | "xl" | "xxl";

export interface ICardProps {
  boxShadowIntensity?: number;
  boxShadowSize?: BoxShadowSize;
}

export type CardProps = ICardProps & StackProps;

export const Card = styled("div")<CardProps>(
  ({ boxShadowIntensity }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "&::before": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      borderRadius: "inherit",
      opacity: boxShadowIntensity,
      left: 0,
      top: 0,
      transition: "opacity 180ms ease-out",
    },
  }),
  containerStyles,
  boxShadow,
  stackSystem
);

Card.displayName = "Card";

Card.defaultProps = {
  space: 0,
  boxShadowSize: "l",
  boxShadowIntensity: 1,
};
