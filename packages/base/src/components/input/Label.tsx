import styled from "@emotion/styled";
import { compose, flexbox, FlexboxProps } from "styled-system";

import { shouldForwardProp } from "../../utils/shouldForwardProp";

import {
  typographyStyles,
  TypographyProps,
  typographySystem,
} from "../typography/typographyProps";

const labelSystem = compose(flexbox, typographySystem);

export type LabelProps = TypographyProps & FlexboxProps;

export const Label = styled("label", { shouldForwardProp })<LabelProps>(
  typographyStyles,
  labelSystem
);

Label.displayName = "Label";

Label.defaultProps = {
  color: "grayscale.2",
  fontSize: 1,
  justifyContent: "center",
  alignItems: "baseline",
  flex: "none",
};
