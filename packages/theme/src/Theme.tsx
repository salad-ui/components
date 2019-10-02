import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    border: {
      main: '#C3C4C7',
      light: '#DCDCDE',
      dark: '#8B8E93',
    },

    background: '#F6F7F7',
    onBackground: {
      main: '#3C434A',
      subtle: '#646970',
    },

    surface: '#fff',
    onSurface: {
      main: '#3C434A',
      subtle: '#646970',
    },

    primary: {
      main: '#1D2327',
      light: '#2c2c2c',
      dark: '#000000',
    },
    onPrimary: '#fff',

    secondary: {
      main: '#2271B1',
      light: '#4B94D8',
      dark: '#0A4B78',
    },
    onSecondary: '#fff',

    success: {
      main: '#008A20',
      light: '#00BA37',
      dark: '#005C12',
    },
    onSuccess: '#fff',

    warning: {
      main: '#907300',
      light: '#DBAE17',
      dark: '#5C4B00',
    },
    onWarning: '#fff',

    error: {
      main: '#D63638',
      light: '#F86368',
      dark: '#8A2424',
    },
    onError: '#fff',
  },
};

export interface ThemeProps {
  theme?: DefaultTheme;
}

export const Theme: React.FC<ThemeProps> = ({theme: userTheme, children}) => (
  <ThemeProvider theme={userTheme || theme}>
    <>{children}</>
  </ThemeProvider>
);
