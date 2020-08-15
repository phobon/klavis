// Shim for missing styled-system definitions
declare module '@styled-system/should-forward-prop' {
  export default function shouldForwardProp(props: any): any;
}
declare module '@styled-system/theme-get' {
  export default function themeGet(key: any): any;
}