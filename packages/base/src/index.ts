import "@emotion/react"
import "react";
import { BaseTheme } from "@phobon/tokens";

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    as?: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      as?: any;
    }
  }
}

export * from "./components";
export * from "./utils";
