import * as React from 'react';
import {DrawerItem, DrawerItemProps} from '../DrawerItem';
import {DrawerMenuItemContext} from './DrawerMenuItemContext';

export type DrawerMenuItemProps = Omit<DrawerItemProps, 'variant'> & {
  children?: React.ReactNode;
};

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  children,
  ...otherProps
}) => {
  const {variant} = React.useContext(DrawerMenuItemContext);
  return (
    <DrawerItem {...otherProps} variant={variant}>
      {children}
    </DrawerItem>
  );
};
