import {CSSProp, DefaultTheme} from 'styled-components';

declare module 'react' {
  // add the css prop to every component
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
