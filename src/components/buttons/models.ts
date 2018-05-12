
import { SpaceProps, ColorProps } from "styled-system";

export type ButtonAppearanceType = "primary" | "secondary" | "warning" | "danger" | "success" | "subtle" | "link" | "inverse";

interface IButtonProps {
    appearance?: ButtonAppearanceType;
    isDisabled?: boolean;
    isToggled?: boolean;
}

export type ButtonProps = IButtonProps & SpaceProps & ColorProps;