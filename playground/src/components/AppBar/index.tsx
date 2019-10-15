import * as React from 'react';
import {Wrapper, LogoWrapper, LeftWrapper, RightWrapper} from './index.style';

export interface AppBarProps {
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = ({logo, left, right}) => {
  return (
    <Wrapper>
      {logo && <LogoWrapper>{logo}</LogoWrapper>}
      {left && <LeftWrapper>{left}</LeftWrapper>}
      {right && <RightWrapper>{right}</RightWrapper>}
    </Wrapper>
  );
};
