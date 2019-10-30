import * as React from 'react';

export type Variant = 'item' | 'subitem';

export interface ContextProps {
  variant: Variant;
}

export const Context = React.createContext<ContextProps>({variant: 'item'});
