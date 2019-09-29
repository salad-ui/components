import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';

export const theme = {
  color: {
    border: {
      light: '#DCDCDE',
      medium: '#C3C4C7',
      dark: '#8B8E93',
    },

    background: '#F6F7F7',
    onBackground: {
      normal: '#3C434A',
      subtle: '#646970',
    },

    surface: '#fff',
    onSurface: {
      normal: '#3C434A',
      subtle: '#646970',
    },

    primary: {
      light: '#4B94D8',
      medium: '#2271B1',
      dark: '#0A4B78',
    },
    onPrimary: '#fff',

    success: {
      light: '#00BA37',
      medium: '#008A20',
      dark: '#005C12',
    },
    onSuccess: '#fff',

    warning: {
      light: '#DBAE17',
      medium: '#907300',
      dark: '#5C4B00',
    },
    onWarning: '#fff',

    error: {
      light: '#F86368',
      medium: '#D63638',
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
