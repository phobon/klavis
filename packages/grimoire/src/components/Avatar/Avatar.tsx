/* eslint-disable react/default-props-match-prop-types */
import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import {
  compose,
  space,
  border as styledBorder,
  color as styledColor,
  borderRadius as styledBorderRadius,
  SpaceProps,
  BorderProps,
  ColorProps,
  BorderRadiusProps,
} from "styled-system";

import { Image, Text, focus, shouldForwardProp } from "@phobon/base";

import { User } from "../../icons/User";

const statusColor = ({ theme, status }) => {
  const statusColors = {
    none: "transparent",
    error: theme.colors.reds[6],
    warning: theme.colors.oranges[6],
    success: theme.colors.greens[5],
  };

  return {
    backgroundColor: statusColors[status],
  };
};

const presenceColor = ({ theme, presence }) => {
  const presenceColors = {
    none: "transparent",
    unknown: theme.colors.grayscale[6],
    unavailable: theme.colors.reds[6],
    busy: theme.colors.oranges[6],
    available: theme.colors.greens[6],
  };

  return {
    backgroundColor: presenceColors[presence],
  };
};

const extents = ({ size = "m", theme }) => {
  const sizes = {
    s: theme.space[4],
    m: theme.space[5],
    l: theme.space[6],
  };

  return {
    width: sizes[size],
    height: sizes[size],
  };
};

const statusElements = ({ size = "m" }) => {
  const sizes = {
    s: {
      width: 16,
      height: 16,
      right: -10,
    },
    m: {
      width: 20,
      height: 20,
      right: -12,
    },
    l: {
      width: 24,
      height: 24,
      right: -14,
    },
  };

  return sizes[size];
};

const avatarSystem = compose(
  space,
  styledBorder,
  styledColor,
  styledBorderRadius
);

export interface IAvatarProps {
  image?: string;
  name?: string;
  size?: "s" | "m" | "l";
  status?: "none" | "error" | "warning" | "success";
  presence?: "none" | "unknown" | "unavailable" | "busy" | "available";
  variant?: "initials" | "glyph";
  onClick?: () => void;
}

export type AvatarProps =
  IAvatarProps &
  SpaceProps &
  BorderProps &
  ColorProps &
  BorderRadiusProps &
  React.HTMLAttributes<HTMLDivElement>;

const AvatarBox = styled("div", {
  shouldForwardProp,
})<AvatarProps>(
  avatarSystem,
  extents,
  (props: any) => ({
    display: "flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    pointerEvents: "none",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      borderRadius: "50%",
      border: `solid 3px ${props.theme.colors.background}`,
      pointerEvents: "none",
      zIndex: 1,
      ...statusElements(props),
    },
    "&:before": {
      top: -props.theme.space[1],
      opacity: props.status !== "none" ? 1 : 0,
      ...statusColor(props),
    },
    "&:after": {
      bottom: -props.theme.space[1],
      opacity: props.presence !== "none" ? 1 : 0,
      ...presenceColor(props),
    },
  })
);

const buttonFocus = (props) =>
  props.onClick && {
    cursor: "pointer",
    ...focus,
  };

const avatarFontSize = (props) => {
  const fontSizes = {
    s: {
      fontSize: props.theme.fontSizes[0],
    },
    m: {
      fontSize: props.theme.fontSizes[1],
    },
    l: {
      fontSize: props.theme.fontSizes[4],
    },
  };

  return fontSizes[props.size];
};

const AvatarIndicatorButton = styled("button", {
  shouldForwardProp,
})(avatarSystem, avatarFontSize, buttonFocus, {
  width: "inherit",
  height: "inherit",
  fontSize: "inherit",
  border: 0,
  padding: 0,
  pointerEvents: "all",
  display: "flex",
  flex: "none",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 0,
  overflow: "hidden",
});

const AvatarIndicator = ({ size, variant, name, onClick, ...props }) => {
  let width;
  let height;
  switch (size) {
    case "s":
      width = 9;
      height = 10;
      break;
    case "l":
      width = 18;
      height = 21;
      break;
    default:
      width = 12;
      height = 14;
      break;
  }
  return (
    <AvatarIndicatorButton
      as={onClick ? "button" : "div"}
      onClick={onClick}
      size={size}
      {...props}
    >
      {variant === "initials" ? (
        <Text fontSize="inherit" color="inherit" lineHeight={0}>
          {name
            .split(" ")
            .reduce((acc, current) => acc.charAt(0) + current.charAt(0))
            .substr(0, 2)}
        </Text>
      ) : (
        <User width={width} height={height} fill="white" />
      )}
    </AvatarIndicatorButton>
  );
};

AvatarIndicator.defaultProps = {
  onClick: null,
};

export const Avatar: React.FunctionComponent<AvatarProps> = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      image,
      name,
      size,
      variant,
      onClick,
      bg,
      color,
      borderRadius,
      className,
      border,
      borderColor,
      status,
      presence,
      ...props
    },
    ref
  ) => (
    <AvatarBox
      ref={ref}
      size={size}
      borderRadius={borderRadius}
      className={`grimoire__avatar ${className ?? ""}`}
      status={status}
      presence={presence}
      {...props}
    >
      {image ? (
        <AvatarIndicatorButton
          as={onClick ? "button" : "div"}
          onClick={onClick}
          borderRadius={borderRadius}
          border={border}
          borderColor={borderColor}
        >
          <Image
            src={image}
            cover
            borderRadius={borderRadius}
            alt="avatar image"
          />
        </AvatarIndicatorButton>
      ) : (
        <AvatarIndicator
          size={size}
          onClick={onClick}
          variant={variant}
          name={name}
          bg={bg}
          color={color}
          borderRadius={borderRadius}
          border={border}
          borderColor={borderColor}
        />
      )}
    </AvatarBox>
  )
);

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
  size: "m",
  status: "none",
  presence: "none",
  variant: "initials",
  bg: "accent.4",
  color: "white",
  borderRadius: 6,
  border: "3px solid",
  borderColor: "white",
};
