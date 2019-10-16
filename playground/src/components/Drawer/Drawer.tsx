import * as React from 'react';
import {Wrapper, TopWrapper, BottomWrapper} from './Drawer.styles';

export interface DrawerProps {
  top: React.ReactNode;
  bottom: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({top, bottom}) => {
  return (
    <Wrapper>
      <TopWrapper>{top}</TopWrapper>
      <BottomWrapper>{bottom}</BottomWrapper>
    </Wrapper>
  );
};
