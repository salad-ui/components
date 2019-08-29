import {lighten} from 'polished';

export const COLOR = {
  // Main
  brand: '#05f',
  text: 'black',
  textPrimary: 'white',

  // UI
  uiBackground: '#fff',
  uiBackgroundPrimary: '#05f',
  focus: '#00BFFF',

  // Shades
  light: lighten(0.3, 'black'),
  lighter: lighten(0.5, 'black'),
  lightest: lighten(0.8, 'black'),
};
