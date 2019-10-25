import * as React from 'react';
import {Accordion, AccordionProps} from '@salad-ui/utils';
import {DrawerMenuGroup} from './Group';
import {DrawerMenuItem} from './Item';
import {DrawerMenuGroupProps as GroupProps} from './Group';
import {DrawerMenuItemProps as ItemProps} from './Item';

export type DrawerMenuGroupProps = GroupProps;
export type DrawerMenuItemProps = ItemProps;

export interface DrawerMenuStatic {
  Group: typeof DrawerMenuGroup;
  Item: typeof DrawerMenuItem;
}

export interface DrawerMenuProps {
  expanded?: AccordionProps['expanded'];
  onToggle?: AccordionProps['onToggle'];
  children?: React.ReactNode;
}

export const DrawerMenu: React.FC<DrawerMenuProps> & DrawerMenuStatic = ({
  expanded = [],
  onToggle = () => {},
  children,
}) => {
  return (
    <Accordion expanded={expanded} onToggle={onToggle}>
      {children}
    </Accordion>
  );
};

DrawerMenu.Group = DrawerMenuGroup;
DrawerMenu.Item = DrawerMenuItem;
