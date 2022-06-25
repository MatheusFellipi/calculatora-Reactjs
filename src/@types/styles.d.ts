import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    white: string;
    black: string;
    palette: {
      common: {
        background: string;
      };
      text: {
        primary: string;
        secondary: string;
        highlight: string;
      };
      button: {
        primary: string;
        secondary: string;
      };
    };
  }
}
