import styled from "styled-components";
import styledTs from "styled-components-ts";
import { color, space, borderRadius, ColorProps, SpaceProps, BorderRadiusProps } from "styled-system";

export interface IInputProps {
    disabled?: boolean;
    error?: boolean;
}

export type InputProps =
    IInputProps
    & ColorProps
    & SpaceProps
    & BorderRadiusProps;

const borderColor = (props, { disabled, error, theme } = props) => {
    if (error) {
        return theme.colors.guidance.error;
    }

    if (disabled) {
        return "transparent";
    }

    return theme.colors.grayscale[2];
};

const Input = styledTs<InputProps>(styled.input)`
    position: relative;

    ${color}
    ${space}

    ${borderRadius}
    
    border: 1px solid ${props => borderColor(props)};
    border-radius: 0.5rem;

    opacity: ${props => props.disabled ? 0.3 : 1};
    pointer-events: ${props => props.disabled ? "none" : "all"};

    &::-webkit-input-placeholder {
        color: ${props => props.theme.colors.grayscale[3]};
    }

    &:focus {
        border-color: ${props => props.theme.colors.accent};
    }
`;

Input.defaultProps = {
    color: "foreground",
    bg: "background",
    px: 3,
    pb: 1
};

export default Input;