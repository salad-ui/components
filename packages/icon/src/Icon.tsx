import * as React from 'react';
import {Wrapper} from './Icon.styles';
import {ColorProps} from '@salad-ui/color';

export interface IconProps extends ColorProps {
  className?: string;
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({children, ...otherProps}) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
);
