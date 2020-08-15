import styled from 'styled-components';
import {
  system,
  compose,
  space,
  layout,
  borderRadius,
  background,
  position,
  SpaceProps, LayoutProps, BorderRadiusProps, BackgroundProps, PositionProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  fullWidth, fullHeight, round, gridPosition,
  FullWidthProps, FullHeightProps, RoundProps, GridPositionProps,
} from '../../utils';

const cover = system({
  cover: {
    property: 'backgroundSize',
    transform: n => n ? 'cover' : 'auto',
  },
});

const responsive = ({ responsive }: IImageProps) => responsive ? {
  width: '100%',
  height: 'auto',
} : null;

const imageSystem = compose(space, layout, borderRadius, background, position, fullWidth, fullHeight, round, gridPosition, cover);

export interface IImageProps {
  cover?: boolean;
  responsive?: boolean;
}
export type ImageProps =
  IImageProps
  & SpaceProps
  & LayoutProps
  & BorderRadiusProps
  & BackgroundProps
  & PositionProps
  & FullWidthProps
  & FullHeightProps
  & RoundProps
  & GridPositionProps;

export const Image = styled('img').withConfig({ shouldForwardProp })<ImageProps>({
  display: 'block',
},
  imageSystem,
  cover,
  responsive,
);

Image.displayName = 'Image';