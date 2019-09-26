import * as React from 'react';
import {ThemeProvider} from 'styled-components';

export const theme = {
    color: {
        primary: 'red',
        secondary: 'green',
    },
};

export const Theme: React.FC = ({children}) => (
    <ThemeProvider theme={theme}>
    <>{children}</>
    </ThemeProvider>
);
