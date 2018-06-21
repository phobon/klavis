import { ButtonProps } from "./models";

import Button from "./button";

import { ExtentType } from "../models";

interface ICircleButtonProps {
    extent?: ExtentType;
}

type CircleButtonProps =
    ICircleButtonProps
    & ButtonProps;

const size = (props: any): string => {
    switch (props.extent) {
        case "s":
        return "2rem";
        case "m":
        return "3rem";
        case "l":
        return "4rem";
        case "xl":
        return "5rem";
        default:
        return "3rem";
    }
}

const CircleButton = Button.extend<CircleButtonProps>`
    border-radius: 100%;
    padding: 0;
    width: ${props => size(props)};
    height: ${props => size(props)};
`;

CircleButton.defaultProps = {
    extent: "l"
}

export default CircleButton;