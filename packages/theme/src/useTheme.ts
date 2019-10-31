import * as React from 'react';
import {ThemeContext} from 'styled-components';
import {theme, Theme} from './Theme';

// FIXME: remove in SCv5
export const useTheme = (): Theme => {
  return React.useContext(ThemeContext) || theme;
};
