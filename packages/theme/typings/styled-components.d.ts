import 'styled-components';

type Color = string;

interface BackgroundColorMap {
  main: Color;
  light: Color;
  dark: Color;
}

interface ForegroundColorMap {
  main: Color;
  subtle: Color;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      border: BackgroundColorMap;

      background: Color;
      onBackground: ForegroundColorMap;

      surface: Color;
      onSurface: ForegroundColorMap;

      primary: BackgroundColorMap;
      onPrimary: Color;

      secondary: BackgroundColorMap;
      onSecondary: Color;

      success: BackgroundColorMap;
      onSuccess: Color;
      warning: BackgroundColorMap;
      onWarning: Color;
      error: BackgroundColorMap;
      onError: Color;
    };
  }
}
