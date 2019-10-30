import * as React from 'react';

export interface ButtonGroupContextProps {
  isCompact?: boolean;
}

export const ButtonGroupContext = React.createContext<ButtonGroupContextProps>(
  {},
);
