import borderWidths from "./borderwidths";
import breakpoints from "./breakpoints";
import easings from "./easings";
import fontSizes from "./fontsizes";
import fontWeights from "./fontweights";
import letterSpacings from "./letterspacings";
import shadows from "./shadows";
import space from "./space";
import radii from "./radii";
import textStyles from "./textstyles";
import { grayscale, colour, randomColour } from "./palettes";

import { ThemeType } from "./models";

// Construct some light and dark palettes.
const light = [
    grayscale.heavier,
    grayscale.heavy,
    grayscale.medium,        
    grayscale.light,
    grayscale.lighter,
    grayscale.lightest
];
const dark = [...light].reverse();
const grayscalePalettes = { light, dark };

// Construct a base colors object to use in a theme.
const colors = {
    black: "#000",
    white: "#FFF",
    accent: colour.yellow,
    background: grayscale.lightest,
    foreground: grayscale.heavier,
    navigation: colour.yellow,
    sidebar: "#FFF",
    grayscale: [""],
    guidance: {
        error: colour.red,
        warning: colour.sand,
        success: colour.green
    }
};

// Construct a base theme with values we want.
const baseTheme = {
    borderWidths,
    breakpoints,
    easings,
    fontSizes,
    fontWeights,
    letterSpacings,
    radii,
    shadows,
    space,
    colors,
    textStyles
};

// Construct some static themes.
// TODO: This isn't quite how I want it to be, but it'll do, pig.
const lightTheme = Object.assign({}, baseTheme);
lightTheme.colors.grayscale.push(...light);
const darkTheme = Object.assign({}, baseTheme);
darkTheme.colors.grayscale.push(...dark);

export default (type: ThemeType) => type === "light" ? lightTheme : darkTheme;