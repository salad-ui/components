import * as React from 'react';
import {ColorProps} from '@salad-ui/color';
import {MarginProps} from '@salad-ui/spacing';
import {IconSize} from './types';
import {Wrapper} from './Icon.styles';

export interface IconProps extends ColorProps, MarginProps {
  size?: IconSize;
  className?: string;
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({children, ...otherProps}) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
);
