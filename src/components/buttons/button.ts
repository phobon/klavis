import styled from "styled-components";

import { space, fontSize, SpaceProps, FontSizeProps } from "styled-system";

import { ButtonProps } from "./models";

const bg = (props: any): string => {
    if (props.isDisabled) {
        return props.theme.colors.grayscale[4];
    }

    if (props.isToggled) {
        return props.theme.colors.accent;
    }

    switch (props.appearance) {
        case "primary":
            return props.theme.colors.accent;
        case "secondary":
            return props.theme.colors.grayscale[4];
        case "subtle":
        case "link":
        case "inverse":
            return "transparent";
        case "warning":
            return props.theme.colors.guidance.warning;
        case "danger":
            return props.theme.colors.guidance.error;
        case "success":
            return props.theme.colors.guidance.success;
        default:
            return props.theme.colors.grayscale[4];
    }
};
const color = (props: any): string => {
    if (props.isDisabled) {
        return props.theme.colors.grayscale[2];
    }

    if (props.isToggled) {
        return props.theme.colors.white;
    }

    switch (props.appearance) {        
        case "primary":  
        case "warning":
        case "danger":
        case "success":
        case "inverse":
            return props.theme.colors.white;
        case "secondary":  
        case "subtle":
        case "link":
        default:
            return props.theme.colors.grayscale[2];
    }
};
const hoverBg = (props: any): string => {
    if (props.isToggled) {
        return props.theme.colors.accent;
    }

    switch (props.appearance) {    
        case "inverse":
            return props.theme.colors.white; 
        case "subtle":
        case "link":        
            return props.theme.colors.grayscale[4]; 
        case "primary":            
        case "warning":
        case "danger":
        case "success":
        case "secondary":
        default:
            return props.theme.colors.accent;
    }
};
const hoverColor = (props: any): string => {
    switch (props.appearance) {    
        case "inverse":
            return props.theme.colors.accent;    
        case "primary":            
        case "warning":
        case "danger":
        case "success":
        case "secondary":
        case "subtle":
        case "link":        
        default:
            return props.theme.colors.white; 
    }
};

const padding = (props: any): string => {
    switch (props.appearance) {    
        case "link":
            return "0";
        case "inverse":  
        case "primary":            
        case "warning":
        case "danger":
        case "success":
        case "secondary":
        case "subtle":
        default:
            return "0 2rem"; 
    }
}

type StyledButtonProps = ButtonProps & SpaceProps & FontSizeProps;

const Button = styled.button<StyledButtonProps>`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    border: none;    
    cursor: pointer;

    transition: background-color 180ms ease-out, color 180ms ease-out, fill 180ms ease-out, transform 180ms ease-out, opacity 180ms ease-out;

    border-radius: 0.5rem;
    height: 3rem;
    padding: ${props => padding(props)};

    ${space}
    ${fontSize}
    
    background-color: ${props => bg(props)};
    color: ${props => color(props)};
    fill: ${props => color(props)};

    pointer-events: ${props => props.isDisabled ? "none" : "all"};

    &:hover {
        background-color: ${props => hoverBg(props)};
        color: ${props => hoverColor(props)};
        fill: ${props => hoverColor(props)};
        transform: translateY(-1px);
        opacity: 1;
    }
`;

Button.defaultProps = {
    appearance: "secondary",
    isDisabled: false,
    isToggled: false,
    fontSize: 1
}

export default Button;