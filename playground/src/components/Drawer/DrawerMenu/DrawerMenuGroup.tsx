import * as React from 'react';
import {useUID} from 'react-uid';
import {Accordion} from '../../Accordion';
import {DrawerItem} from '../DrawerItem';
import {
  DrawerMenuItemContext,
  DrawerMenuItemContextProps,
} from './DrawerMenuItemContext';

export interface DrawerMenuGroupProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  label: React.ReactNode;
  children?: React.ReactNode;
}

export const DrawerMenuGroup: React.FC<DrawerMenuGroupProps> = ({
  before,
  after,
  label,
  children,
}) => {
  const rel = useUID();
  const context = React.useMemo<DrawerMenuItemContextProps>(
    () => ({variant: 'subitem'}),
    [],
  );
  return (
    <>
      <Accordion.Toggle rel={rel}>
        {renderProps => (
          <DrawerItem
            role="button"
            variant="item"
            before={before}
            after={after}
            {...renderProps}
          >
            {label}
          </DrawerItem>
        )}
      </Accordion.Toggle>
      <DrawerMenuItemContext.Provider value={context}>
        <Accordion.Content rel={rel}>{children}</Accordion.Content>
      </DrawerMenuItemContext.Provider>
    </>
  );
};
