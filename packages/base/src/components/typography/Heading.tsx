import React from "react";
import { Text } from "./Text";

import { TypographyProps } from "./typographyProps";

const defaultProps: TypographyProps = {
  color: "grayscale.1",
  fontWeight: "light",
  lineHeight: 0,
  fontSize: [6, 8],
  textAlign: "left",
};

const headingProps = (heading: string): TypographyProps => {
  const headings: any = {
    h1: {
      ...defaultProps,
    },
    h2: {
      ...defaultProps,
      fontSize: [5, 7],
      lineHeight: 1,
    },
    h3: {
      ...defaultProps,
      fontSize: [4, 6],
      lineHeight: 1,
    },
    h4: {
      ...defaultProps,
      fontSize: [3, 5],
      lineHeight: 2,
    },
    h5: {
      ...defaultProps,
      fontSize: [2, 4],
      lineHeight: 3,
    },
    h6: {
      ...defaultProps,
      fontSize: [2, 3],
      lineHeight: 4,
    },
  };

  return headings[heading];
};

export const Heading: React.FunctionComponent<TypographyProps & { as?: any }> = ({
  children,
  as,
  ...props
}) => {
  const rest = headingProps(as.toString());
  return (
    <Text as={as} {...rest} {...props}>
      {children}
    </Text>
  );
};

Heading.defaultProps = {
  as: "h3",
};

Heading.displayName = "Heading";
