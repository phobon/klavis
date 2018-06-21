import styled from "styled-components";
import { IDefaultTheme } from "../models";

interface IDayProps {
    isSelected?: boolean;
    isToday?: boolean;
    hasItems?: boolean;
    subtle?: boolean;
}

type DayProps = IDayProps & IDefaultTheme;

const color = (props: any): string => {
    if (props.isSelected || props.isToday) {
        return props.theme.colors.accent;
    }

    return props.subtle ? props.theme.colors.grayscale[4] : props.theme.colors.grayscale[2];
}

const Day = styled.button<DayProps>`
    position: relative;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 180ms ease-out, color 180ms ease-out;
    color: ${props => color(props)};
    padding: 0.75rem 0;
    pointer-events: ${props => props.isSelected ? "none" : "all"};
    border: 0;
    background: transparent;
    width: 100%;
    font-weight: ${props => props.isSelected || props.isToday ? 600 : 400};
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        display: ${props => props.hasItems ? "flex" : "none"};
        bottom: -1rem;
        background-color: ${props => props.isSelected ? props.theme.colors.accent : props.theme.colors.grayscale[3]};
        pointer-events: none;
    }

    &::before {
        content: "";
        width: 50%;
        height: 2px;
        display: ${props => props.isToday ? "flex" : "none"};
        background-color: ${props => props.theme.colors.accent};
        pointer-events: none;
        position: absolute;
        bottom: 0px;
    }

    &:hover {
        background-color: ${props => props.theme.colors.background};
    }
`;

export default Day;