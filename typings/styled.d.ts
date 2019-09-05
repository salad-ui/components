import 'styled-components';
import {ColorThemeProps} from '@design-system-example/color';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ColorThemeProps {}
}
