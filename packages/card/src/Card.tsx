import * as React from 'react';
import {Wrapper} from './Card.style';

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC = ({children, ...otherProps}) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
);
