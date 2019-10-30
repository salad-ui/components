import * as React from 'react';
import {FocusGroup} from '@salad-ui/a11y';
import {Tab} from './Tab';
import {Wrapper} from './Tabs.styles';

export interface TabsStatic {
  Tab: typeof Tab;
}
export interface TabsProps {
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> & TabsStatic = ({children}) => {
  return (
    <FocusGroup orientation="horizontal">
      <Wrapper>{children}</Wrapper>
    </FocusGroup>
  );
};

Tabs.Tab = Tab;
