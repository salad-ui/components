import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {theme, Theme} from './Theme';

export interface ThemeProps {
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProps> = ({
  theme: userTheme,
  children,
}) => (
  <StyledThemeProvider theme={userTheme || theme}>
    <>{children}</>
  </StyledThemeProvider>
);
