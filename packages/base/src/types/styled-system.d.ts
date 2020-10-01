// Shim for missing styled-system definitions
declare module '@styled-system/theme-get' {
  export default function themeGet(key: any): any;
}