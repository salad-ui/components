import * as React from 'react';
import {Anchor} from './Link.style';

export interface LinkProps {
  isSubtle?: boolean;
  href?: HTMLAnchorElement['href'];
  target?: HTMLAnchorElement['target'];
  rel?: HTMLAnchorElement['rel'];
  children?: React.ReactNode;
}

export const Link = ({children, ...otherProps}: LinkProps) => {
  return <Anchor {...otherProps}>{children}</Anchor>;
};
