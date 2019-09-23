import * as React from 'react';
import {TreatProvider} from 'react-treat';
import {theme} from './Theme.treat';

export const Theme: React.FC = ({children}) => (
    <TreatProvider theme={theme}>{children}</TreatProvider>
);
