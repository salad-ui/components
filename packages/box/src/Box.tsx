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
];

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

interface ComponentProps {
  $omitProps?: string[];
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const omitProps = (props: {[name: string]: any}, names: string[]) => {
  const omittedProps = {...props};
  names.forEach(name => {
    delete omittedProps[name];
  });
  return omittedProps;
};

const Component: React.FC<ComponentProps> = ({
  component,
  $omitProps = [],
  ...otherProps
}) => {
  return React.createElement(
    component || 'div',
    omitProps(otherProps, [...boxProps, ...$omitProps]),
  );
};

export interface BoxProps extends BoxOptions, ComponentProps {}

const Element = styled(Component)<BoxProps>`
  ${box}
`;

export const Box: React.FC<BoxProps> = props => <Element {...props} />;
