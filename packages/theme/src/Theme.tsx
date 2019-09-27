import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';

export const theme = {
  color: {
    border: {
      light: '#cfcfcf',
      medium: '#828282',
      dark: '#363636',
    },

    background: '#f2f2f2',
    onBackground: {
      normal: 'black',
      subtle: '#444',
    },

    surface: 'white',
    onSurface: {
      normal: 'black',
      subtle: '#444',
    },

    primary: {
      light: '#6ab3d0',
      medium: '#006088',
      dark: '#002c40',
    },
    onPrimary: 'white',

    success: {
      light: '#51ed6d',
      medium: '#21b83c',
      dark: '#029c1e',
    },
    onSuccess: 'white',

    warning: {
      light: '#ffc738',
      medium: '#d6a118',
      dark: '#ad7f09',
    },
    onWarning: 'white',

    error: {
      light: '#f56262',
      medium: '#e60e0e',
      dark: '#750101',
    },
    onError: 'white',
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
