import * as React from 'react';
import {Wrapper} from './Icon.styles';

export interface IconProps {
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({children}) => (
  <Wrapper>{children}</Wrapper>
);
