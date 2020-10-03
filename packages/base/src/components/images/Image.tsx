import styled from "@emotion/styled";

import { shouldForwardProp } from "../../utils/shouldForwardProp";

import { imageStyles, ImageProps, imageSystem, responsive } from "./imageProps";

export const Image = styled("img", { shouldForwardProp })<ImageProps>(
  imageStyles,
  imageSystem,
  responsive
);

Image.displayName = "Image";
