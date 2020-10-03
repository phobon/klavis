import styled from "@emotion/styled";

import { shouldForwardProp } from "../../utils/shouldForwardProp";

import {
  TypographyProps,
  typographyStyles,
  typographySystem,
} from "./typographyProps";

export const Text = styled("span", { shouldForwardProp })<
  TypographyProps & any
>(typographyStyles, typographySystem);

Text.displayName = "Text";

Text.defaultProps = {
  color: "foreground",
  fontSize: 1,
  textAlign: "left",
  lineHeight: 4,
};
