import styled, { keyframes } from "styled-components";

import { ILoadingProps } from "./models";
import { IDefaultTheme } from "../models";

const barKeyframes = keyframes`
    0% {
        transform: scaleX(0);
    }

    75% {
        transform: scaleX(1);
    }

    100% {
        transform: scaleX(1);
    }
`;

type LoadingProps = ILoadingProps & IDefaultTheme;

export default styled.div<LoadingProps>`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    height: 0.25rem;
    position: relative;
    z-index: 2;
    pointer-events: none;
    transition: opacity 500ms ease-out;
    opacity: ${props => props.visible ? 1 : 0};
    
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0;
        top: 0;
        background-color: ${props => props.theme.colors.accent};
        transform: scaleX(0);
        transformOrigin: 0 50% 0;
        animation: ${props => props.visible ? `${barKeyframes} ${props.time}ms linear forwards` : ""};
    }
`;