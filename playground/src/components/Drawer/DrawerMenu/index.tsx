import * as React from 'react';
import {Accordion, AccordionProps} from '../../Accordion';
import {DrawerMenuGroup} from './DrawerMenuGroup';
import {DrawerMenuItem} from './DrawerMenuItem';

export interface DrawerMenuStatic {
  Group: typeof DrawerMenuGroup;
  Item: typeof DrawerMenuItem;
}

export interface DrawerMenuProps {
  expanded: AccordionProps['expanded'];
  onToggle: AccordionProps['onToggle'];
}

export const DrawerMenu: React.FC<DrawerMenuProps> & DrawerMenuStatic = ({
  expanded,
  onToggle,
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

export {DrawerMenuGroupProps} from './DrawerMenuGroup';
export {DrawerMenuItemProps} from './DrawerMenuItem';
