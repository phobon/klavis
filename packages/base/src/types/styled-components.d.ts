import 'styled-components'

declare module 'styled-components' {
  interface GuidanceColours {
    info: [string, string];
    error: [string, string];
    warning: [string, string];
    success: [string, string];
    focus: string;
  }
  interface SecondaryColours {
    grayscale: string[];
    accent: string[];
    blues: string[];
    cyans: string[];
    greens: string[];
    yellows: string[];
    oranges: string[];
    reds: string[];
    purples: string[];
    violets: string[];
  }
  interface Colours extends SecondaryColours {
    black: string;
    white: string;
    guidance: GuidanceColours,
    foreground: string;
    background: string;
  }
  export interface DefaultTheme {
    colors: Colours;
    breakpoints: string[];
    fonts: { [key: string]: string };
    fontSizes: number[];
    fontWeights: { [key: string]: number };
    letterSpacings: { [key: string]: string };
    lineHeights: number[];
    radii: (number | string)[];
    boxShadows: string[];
    space: number[];
    textStyles: { [key: string]: { [key: string]: string } };
    densities: { [key: string]: number };
  }
}