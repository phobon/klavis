import styled from "@emotion/styled";
import {
  compose,
  color,
  space,
  ColorProps,
  SpaceProps,
} from 'styled-system';
import { shouldForwardProp } from "@phobon/base";

const badgeSystem = compose(space, color);

export type BadgeProps = ColorProps & SpaceProps;

export const Badge = styled('div', {
  shouldForwardProp,
})<BadgeProps>((props: any) => ({
    minWidth: props.theme.space[4],
    maxWidth: props.theme.space[6],
    height: props.theme.space[4],
    padding: props.children.toString().length > 2 ? `0 ${props.theme.space[2]}px` : 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    lineHeight: `${props.theme.space[4] + 1}px`,
    textAlign: "center",
    borderRadius: props.theme.radii[5],
    fontSize: props.theme.fontSizes[0],
  }),
  badgeSystem
);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  bg: 'grayscale.2',
  color: 'white',
};
