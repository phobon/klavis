import styled from "styled-components";
import { borderRadius } from "styled-system";
import styledTs from "styled-components-ts";

import { Box, BoxProps } from "../../core";

interface ICardProps {
    subtle?: boolean;
    accent?: string;
}

export type CardProps = 
    ICardProps
    & BoxProps;

const Card = styledTs<CardProps>(Box.extend)`
    transition: transform 180ms ease-out, opacity 180ms ease-out, filter 180ms ease-out;
    cursor: pointer;    
    position: relative;  
    text-decoration: none;

    opacity: ${props => props.subtle ? 0.5 : 1};
    filter: ${props => props.subtle ? "grayscale(100%)" : "grayscale(0)"};

    &:before, &:after {
        content: "";
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        opacity: 0;
        transition: opacity 180ms ease-out;
        border-radius: ${props => borderRadius(props.borderRadius)};
        pointer-events: none;
    }

    &:before {
        z-index: 1;
        height: 1rem;
        background-color: ${props => props.theme.colors.accent};
    }

    &:after {
        height: 100%;
        box-shadow: 0 1rem 3rem 0 rgba(0,0,0,0.1);
        z-index: -1;
    }

    &:hover {
        transform: translateY(-1px);
        opacity: 1;
        filter: grayscale(0);

        &:after {
            opacity: 1;
        }
    }
`;

Card.defaultProps = {
    align: "flex-start",
    justify: "flex-start",
    borderRadius: 3,
    flexDirection: "column",
    bg: "white"
}

export default Card;