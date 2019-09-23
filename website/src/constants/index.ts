import {lighten} from 'polished';

export const COLOR = {
    // Main
    brand: '#2271b1',
    text: 'black',
    textPrimary: 'white',

    // UI
    uiBackground: '#fff',
    uiBackgroundPrimary: '#2271b1',
    focus: '#00BFFF',

    // Shades
    light: lighten(0.3, 'black'),
    lighter: lighten(0.5, 'black'),
    lightest: lighten(0.8, 'black'),
};
