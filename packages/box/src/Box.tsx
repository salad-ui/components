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
import {ValueOrValueMap} from '@salad-ui/breakpoint';
import * as utils from '@salad-ui/utils';

const boxProps = [
  'color',
  'backgroundColor',
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
  'margin',
  'marginX',
  'marginY',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'padding',
  'paddingX',
  'paddingY',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'display',
  'alignItems',
  'justifyContent',
];

export interface BoxOptions
  extends MarginProps,
    PaddingProps,
    ColorProps,
    BackgroundColorProps {
  display?: ValueOrValueMap<string>;
  alignItems?: ValueOrValueMap<string>;
  justifyContent?: ValueOrValueMap<string>;
}

export const box = css<BoxOptions>`
  ${marginProps}
  ${paddingProps}
  ${colorProps}
  ${backgroundColorProps}
  ${({display}) => display && utils.display(display)}
  ${({alignItems}) => alignItems && utils.alignItems(alignItems)}
  ${({justifyContent}) =>
    justifyContent && utils.justifyContent(justifyContent)}
`;

interface ComponentProps {
  propsToOmit?: string[];
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const omitProps = (props: {[name: string]: any}, names: string[]) => {
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const omittedProps = {...props};
  names.forEach(name => {
    delete omittedProps[name];
  });
  return omittedProps;
};

const Component: React.FC<ComponentProps> = ({
  component,
  propsToOmit = [],
  ...otherProps
}) => {
  return React.createElement(
    component || 'div',
    omitProps(otherProps, [...boxProps, ...propsToOmit]),
  );
};

export interface BoxProps extends BoxOptions, ComponentProps {}

export const Element = styled(Component)<BoxProps>`
  ${box}
`;

export const Box: React.FC<BoxProps> = props => <Element {...props} />;
