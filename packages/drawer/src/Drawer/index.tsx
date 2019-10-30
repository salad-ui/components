import * as React from 'react';
import {FocusGroup} from '@salad-ui/a11y';
import {Wrapper, TopWrapper, BottomWrapper} from './index.styles';

export interface DrawerProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({top, bottom}) => {
  return (
    <FocusGroup orientation="vertical">
      <Wrapper>
        <TopWrapper>{top}</TopWrapper>
        <BottomWrapper>{bottom}</BottomWrapper>
      </Wrapper>
    </FocusGroup>
  );
};
