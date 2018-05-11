import * as React from "react";
import styled from "styled-components";
import styledTs from "styled-components-ts";
import { color } from "styled-system";

import { Box, BoxProps, Vector, Image } from "../../core";
import { randomColour, PersonIcon } from "../../tokens";

import { ExtentType } from "../models";

type ShapeType = "square" | "circle";
type UnavailableStyleType = "initials" | "glyph";
type StatusType = "error" | "warning" | "success";
type PresenceType = "unknown" | "unavailable" | "busy" | "available";

interface IAvatarProps {
    image?: string;
    name: string;
    extent: ExtentType;
    unavailableStyle: UnavailableStyleType;
    status?: StatusType;
    presence?: PresenceType;
}

const mapSize = (extent: ExtentType): number => {
    switch (extent) {
        case "s":
        return 2;
        case "m":
        return 4;
        case "l":
        return 5;
        case "xl":
        return 6;
    }
};

const statusToColour = (theme: any, status: StatusType): string => {
    switch (status) {
        case "error":
            return theme.colors.guidance.error;
        case "warning":
            return theme.colors.guidance.warning;
        case "success":
            return theme.colors.guidance.success;
    }
};

const presenceToColour = (theme: any, presence: PresenceType): string => {
    switch (presence) {
        case "unknown":
            return theme.colors.grayscale[3];
        case "unavailable":
            return theme.colors.guidance.error;
        case "busy":
            return theme.colors.guidance.warning;
        case "available":
            return theme.colors.guidance.success;
    }
};

type AvatarProps = 
    { 
        status?: StatusType; 
        presence?: PresenceType 
    }
    & BoxProps;

const AvatarBox = styledTs<AvatarProps>(Box.extend)`
    position: relative;

    &:before, &:after {
        position: absolute;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 100%;
        border: solid 3px white;
        content: "";
        pointer-events: none;
        right: -0.5rem;
    }

    &:before {
        top: -0.5rem;
        opacity: ${props => props.status ? 1 : 0};
        background-color: ${props => props.status ? statusToColour(props.theme, props.status) : "transparent"};
    }

    &:after {
        bottom: -0.5rem;
        opacity: ${props => props.presence ? 1 : 0};
        background-color: ${props => props.presence ? presenceToColour(props.theme, props.presence) : "transparent"};
    }
`;

const unavailableElement = (unavailableStyle: UnavailableStyleType, fontSize: number, name: string): JSX.Element => {
    switch (unavailableStyle) {
        case "glyph":
        return <PersonIcon/>;
        case "initials":
        const n = name.split(' ').reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0)).substr(0, 2);
        return <Box fullWidth fullHeight bg={randomColour()} round color="white" fontSize={fontSize} style={{ lineHeight: 1 }}>{n}</Box>;
    }
}

export default (props: IAvatarProps) => {
    const { image, extent, unavailableStyle, status, presence, name } = props;
    const mappedSize = mapSize(extent);
    const remSize = `${mappedSize}rem`;
    const fontSize = mappedSize - 2;

    return (
        <AvatarBox style={{ width: remSize, height: remSize }} status={status} presence={presence}>
            {image && <Image src={image} fullWidth fullHeight round />}
            {!image && unavailableElement(unavailableStyle, fontSize, name)}
        </AvatarBox>
    )
}