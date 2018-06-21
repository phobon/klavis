import * as React from "react";

import { Box, BoxProps, Vector, Image } from "../../core";
import { randomColour, BusinessIcon } from "../../tokens";

import { ExtentType } from "../models";

type ShapeType = "square" | "circle";
type UnavailableStyleType = "initials" | "glyph";
type StatusType = "error" | "warning" | "success";
type PresenceType = "unknown" | "unavailable" | "busy" | "available";

interface IProductProps {
    image?: string;
    name: string;
    extent: ExtentType;
}

type ProductProps = IProductProps & BoxProps;

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

export default (props: ProductProps) => {
    const { image, extent, name } = props;
    const mappedSize = mapSize(extent);
    const remSize = `${mappedSize}rem`;
    const fontSize = mappedSize - 2;

    const n = name.split(' ').reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0));

    return image ? <Image src={image} fullWidth fullHeight borderRadius={4} style={{ width: remSize, height: remSize }} />
                 : <Box style={{ width: remSize, height: remSize, lineHeight: 1, fill: "#FFF" }} bg={randomColour()} borderRadius={4} color="white" fontSize={fontSize}>
                    <BusinessIcon/>
                 </Box>;
}