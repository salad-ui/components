import * as React from 'react';
import styled, {css} from 'styled-components';
import {
  MarginProps,
  marginProps,
  PaddingProps,
  paddingProps,
} from '@salad-ui/spacing';
import {
  ColorProps,
  colorProps,
  BackgroundColorProps,
  backgroundColorProps,
} from '@salad-ui/color';

export interface BoxOptions
  extends MarginProps,
    PaddingProps,
    ColorProps,
    BackgroundColorProps {}

export const box = css<BoxOptions>`
  ${marginProps}
  ${paddingProps}
  ${colorProps}
  ${backgroundColorProps}
`;

export interface BoxProps extends BoxOptions {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const Element: React.ComponentType<BoxProps> = styled.div<BoxProps>`
  ${box}
` as React.ComponentType<BoxProps>;

export const Box: React.FC<BoxProps> = props => <Element {...props} />;
