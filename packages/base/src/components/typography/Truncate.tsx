/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import styled from "@emotion/styled";
import { compose, system } from "styled-system";

import {
  TypographyProps,
  typographySystem,
  typographyStyles,
} from "./typographyProps";

const wordBreak = system({
  wordBreak: true,
});

const truncateSystem = compose(wordBreak, typographySystem);

const boxAlign = ({ textAlign }: any) => {
  const boxAlignments = {
    left: {
      "-webkit-box-align": "start",
    },
    center: {
      "-webkit-box-align": "center",
    },
    right: {
      "-webkit-box-align": "end",
    },
  };

  return boxAlignments[textAlign || "center"];
};

interface ITruncateProps {
  lines?: number;
  wordBreak?: string;
}

export type TruncateProps = ITruncateProps & TypographyProps;

export const Truncate = styled("span")<TruncateProps>(
  ({ lines }: ITruncateProps) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": `${lines}`,
  }),
  typographyStyles,
  truncateSystem,
  boxAlign
);

Truncate.displayName = "Truncate";

Truncate.defaultProps = {
  lines: 1,
  lineHeight: 4,
  textAlign: "left",
  wordBreak: "break-word",
};
