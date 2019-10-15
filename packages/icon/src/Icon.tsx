import * as React from 'react';
import {Wrapper} from './Icon.styled';

export interface IconProps {
  role?: string;
  'aria-hidden'?: boolean;
  'aria-labeledby'?: string;
  'aria-describedby'?: string;
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({children}) => (
  <Wrapper>{children}</Wrapper>
);
