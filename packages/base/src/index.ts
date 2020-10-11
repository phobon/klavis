import '@emotion/react'
import { BaseTheme } from "@phobon/tokens";

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}

export * from "./components";
export * from "./utils";
