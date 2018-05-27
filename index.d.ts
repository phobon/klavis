import * as React from "react";
import { StatelessComponent, ComponentClass, PureComponent, ReactElement } from "react";
import { StyledComponentClass } from "styled-components";
import { 
    BaseTheme, 
    SpaceProps,
    ColorProps,
    AlignItemsProps,
    JustifyContentProps,
    FlexDirectionProps,
    Flexprops,
    AlignContentProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps,
    FlexWrapProps,
    FlexBasisProps,
    FontSizeProps,
    BorderRadiusProps,
    WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps,
    BordersProps,
    BorderColorProps,
    GridGapProps,
    GridRowGapProps,
    GridColumnGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoRowsProps,
    GridAutoColumnsProps,
    GridTemplateRowsProps,
    GridTemplateColumnsProps
} from "styled-system";

declare module "grimoire" {
    type Component<P> = ComponentClass<P> | StatelessComponent<P>;

    type ThemeType = "light" | "dark";

    function getTheme(type: ThemeType): any;
    function randomColour(): string;

    interface IBoxProps {
        fullWidth?: boolean;
        fullHeight?: boolean;
        round?: boolean;
    }
    type BoxProps = 
        IBoxProps
        & SpaceProps
        & ColorProps
        & AlignItemsProps
        & JustifyContentProps
        & FlexDirectionProps
        & Flexprops
        & AlignContentProps
        & JustifySelfProps
        & AlignSelfProps
        & OrderProps
        & FlexWrapProps
        & FlexBasisProps
        & FontSizeProps
        & BorderRadiusProps
        & WidthProps
        & MinWidthProps
        & MaxWidthProps
        & HeightProps
        & MinHeightProps
        & MaxHeightProps
        & BordersProps
        & BorderColorProps;

    type GridProps = 
        IBoxProps
        & SpaceProps
        & ColorProps
        & FontSizeProps
        & BorderRadiusProps
        & WidthProps
        & MinWidthProps
        & MaxWidthProps
        & HeightProps
        & MinHeightProps
        & MaxHeightProps
        & BordersProps
        & BorderColorProps
        & GridGapProps
        & GridRowGapProps
        & GridColumnGapProps
        & GridColumnProps
        & GridRowProps
        & GridAutoFlowProps
        & GridAutoRowsProps
        & GridAutoColumnsProps
        & GridTemplateRowsProps
        & GridTemplateColumnsProps;

    const Box: StyledComponentClass<BoxProps, BaseTheme>;
    const Flex: StyledComponentClass<BoxProps, BaseTheme>;
    const Inline: StyledComponentClass<BoxProps, BaseTheme>;
    const Grid: StyledComponentClass<GridProps, BaseTheme>;
    const Scrollable: StyledComponentClass<BoxProps, BaseTheme>;

    const Dropdown: StyledComponentClass<any, BaseTheme>;
    const Option: StyledComponentClass<any, BaseTheme>;

    const TextInput: StyledComponentClass<any, BaseTheme>;
    const NumberInput: StyledComponentClass<any, BaseTheme>;
    const PasswordInput: StyledComponentClass<any, BaseTheme>;

    const Image: StyledComponentClass<any, BaseTheme>;
    const Vector: StyledComponentClass<any, BaseTheme>;

    const BoxList: StyledComponentClass<any, BaseTheme>;
    const FlexList: StyledComponentClass<any, BaseTheme>;
    const BoxListItem: StyledComponentClass<any, BaseTheme>;
    const FlexListItem: StyledComponentClass<any, BaseTheme>;

    const Heading1: StyledComponentClass<any, BaseTheme>;
    const Heading2: StyledComponentClass<any, BaseTheme>;
    const Heading3: StyledComponentClass<any, BaseTheme>;
    const Heading4: StyledComponentClass<any, BaseTheme>;
    const Heading5: StyledComponentClass<any, BaseTheme>;
    const Heading6: StyledComponentClass<any, BaseTheme>;
    const Text: StyledComponentClass<any, BaseTheme>;
    const Link: StyledComponentClass<any, BaseTheme>;

    const Breadcrumb: StyledComponentClass<any, BaseTheme>;
    
    type ButtonAppearanceType = "primary" | "secondary" | "warning" | "danger" | "success" | "subtle" | "link" | "inverse";
    interface IButtonProps {
        appearance?: ButtonAppearanceType;
        isDisabled?: boolean;
        isToggled?: boolean;
    }
    type ButtonProps = IButtonProps & SpaceProps & ColorProps;
    const Button: StyledComponentClass<any, BaseTheme>;
    const CircleButton: StyledComponentClass<any, BaseTheme>;
    const SquareButton: StyledComponentClass<any, BaseTheme>;
    
    interface ICardProps {
        subtle?: boolean;
        accent?: string;
    }
    type CardProps = 
        ICardProps
        & BoxProps;
    const Card: StyledComponentClass<any, BaseTheme>;

    const Avatar: StyledComponentClass<any, BaseTheme>;
    const Identity: StyledComponentClass<any, BaseTheme>;
    const Product: StyledComponentClass<any, BaseTheme>;

    const LoadingBar: StyledComponentClass<any, BaseTheme>;
    const LoadingCorner: StyledComponentClass<any, BaseTheme>;

    const Lozenge: StyledComponentClass<any, BaseTheme>;
    const Percentage: StyledComponentClass<any, BaseTheme>;
    const DatePicker: StyledComponentClass<any, BaseTheme>;
    const PageHeader: StyledComponentClass<any, BaseTheme>;
    const Badge: StyledComponentClass<any, BaseTheme>;
}