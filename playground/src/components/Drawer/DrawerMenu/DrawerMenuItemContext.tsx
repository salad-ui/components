import * as React from 'react';
import {DrawerItemVariant} from '../DrawerItem';

export interface DrawerMenuItemContextProps {
  variant: DrawerItemVariant;
}

export const DrawerMenuItemContext = React.createContext<
  DrawerMenuItemContextProps
>({variant: 'item'});
