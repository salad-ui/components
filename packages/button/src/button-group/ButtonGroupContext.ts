import * as React from 'react';
import {ButtonSize} from '../button';

interface ButtonGroupContext {
  size?: ButtonSize;
}

export const ButtonGroupContext = React.createContext<ButtonGroupContext>({});
