type Color = string;

export interface Theme {
  color: {
    border: Color;
    'border.light': Color;
    'border.dark': Color;

    background: Color;
    onBackground: Color;
    'onBackground.subtle': Color;

    surface: Color;
    onSurface: Color;
    'onSurface.subtle': Color;

    primary: Color;
    'primary.light': Color;
    'primary.dark': Color;
    onPrimary: Color;

    secondary: Color;
    'secondary.light': Color;
    'secondary.dark': Color;
    onSecondary: Color;

    success: Color;
    'success.light': Color;
    'success.dark': Color;
    onSuccess: Color;

    warning: Color;
    'warning.light': Color;
    'warning.dark': Color;
    onWarning: Color;

    error: Color;
    'error.light': Color;
    'error.dark': Color;
    onError: Color;
  };
}

export const theme: Theme = {
  color: {
    border: '#C3C4C7',
    'border.light': '#DCDCDE',
    'border.dark': '#8B8E93',

    background: '#F6F7F7',
    onBackground: '#3C434A',
    'onBackground.subtle': '#646970',

    surface: '#fff',
    onSurface: '#3C434A',
    'onSurface.subtle': '#646970',

    primary: '#1D2327',
    'primary.light': '#444b4f',
    'primary.dark': '#000000',
    onPrimary: '#fff',

    secondary: '#2271B1',
    'secondary.light': '#4B94D8',
    'secondary.dark': '#0A4B78',
    onSecondary: '#fff',

    success: '#008A20',
    'success.light': '#00BA37',
    'success.dark': '#005C12',
    onSuccess: '#fff',

    warning: '#907300',
    'warning.light': '#DBAE17',
    'warning.dark': '#5C4B00',
    onWarning: '#fff',

    error: '#D63638',
    'error.light': '#F86368',
    'error.dark': '#8A2424',
    onError: '#fff',
  },
};
