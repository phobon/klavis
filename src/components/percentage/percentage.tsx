import * as React from "react";
import { IDefaultTheme } from "../models";

import { Flex, Box, IBoxProps } from "../../core";

export interface IPercentageProps {
    current: number;
    total: number;
}

interface IPercentageBarProps extends IBoxProps {
    percentage: number;
}

type PercentageBarProps = IPercentageBarProps & IDefaultTheme;

const PercentageBar = Box.extend<PercentageBarProps>`
    position: relative;
    background-color: ${props => props.theme.colors.grayscale[5]};
    border-radius: 1rem;
    height: 1rem;
    width: 100%;

    &::after {
        content: "";
        position: absolute;
        background-color: ${props => props.theme.colors.accent};
        left: 0;
        top: 0;
        height: 100%;
        width: ${props => `${props.percentage}%`};
        border-radius: 1rem;
    }
`;

interface IStatBoxProps extends IBoxProps {
    percentageLabel: string;
    secondaryLabel: string;
}

type StatBoxProps = IStatBoxProps & IDefaultTheme;
const StatBox = Box.extend<StatBoxProps>`
    width: 100%;
    position: relative;
    height: 100%;

    &::before, &::after {
        font-size: ${props => props.theme.fontSizes[3]}px;
        position: absolute;
        bottom: 2rem;
    }

    &::before {
        content: "${props => props.percentageLabel}";
        color: ${props => props.theme.colors.accent};
        left: 0;         
    }
    
    &::after {
        content: "${props => props.secondaryLabel}";
        color: ${props => props.theme.colors.grayscale[2]};
        right: 0;
    }
`;

export default class Percentage extends React.PureComponent<IPercentageProps> {
    render() {
        const fraction = this.props.current / this.props.total;

        const percentage = Math.trunc(fraction * 100);
        const remainder = (1 - fraction) * 100;

        return <>
            <PercentageBar percentage={percentage}/>
            <StatBox percentageLabel={`${percentage}% complete`} secondaryLabel={`${this.props.current} of ${this.props.total}`} />
        </>;
    }
}