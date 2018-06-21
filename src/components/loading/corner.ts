import styled from "styled-components";

import { ILoadingProps } from "./models";
import { IDefaultTheme } from "../models";

type LoadingProps = ILoadingProps & IDefaultTheme;
export default styled.div<LoadingProps>`
    display: flex;
    flex: none;
    height: 4rem;
    width: 4rem;
    position: absolute;
    right: 0;
    top: 0;  
    z-index: 2;
    transition: opacity 180ms ease-out;
    overflow: hidden;
    opacity: ${props => props.visible ? 1 : 0};
    &::before, &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1,
        left: 0,
        top: 0,
        transform: rotate(45deg)
    }
    &::before {
        background-color: ${props => props.theme.colors.grayscale[3]};      
    }
    &::after {
        transform: ${props => `scaleX(${props.total});`};
    }
`;