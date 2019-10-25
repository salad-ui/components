import * as React from 'react';
import {useUID} from 'react-uid';
import {Accordion} from '@salad-ui/utils';
import {Context, ContextProps} from '../Context';
import {DrawerMenuItem} from '../Item';

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
  const context = React.useMemo<ContextProps>(() => ({variant: 'subitem'}), []);
  return (
    <>
      <Accordion.Toggle rel={rel}>
        {renderProps => (
          <DrawerMenuItem
            role="button"
            before={before}
            after={after}
            {...renderProps}
          >
            {label}
          </DrawerMenuItem>
        )}
      </Accordion.Toggle>
      <Context.Provider value={context}>
        <Accordion.Content rel={rel}>{children}</Accordion.Content>
      </Context.Provider>
    </>
  );
};
