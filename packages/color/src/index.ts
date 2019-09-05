import {css} from 'styled-components';
import {shade as _shade, tint as _tint} from 'polished';

export interface ColorThemeProps {
  color: {[name: string]: string};
}

type ColorProps = {} & {theme: ColorThemeProps};

export type ColorPath = string;
export type ColorFunction = (props: ColorProps) => string;
export type ColorArgument = ColorPath | ColorFunction;

export function color(path: string) {
  return ({theme}: ColorProps) => theme.color[path];
}

export function shade(c: ColorArgument, amount: number) {
  return (props: ColorProps) =>
    _shade(amount, typeof c === 'string' ? color(c)(props) : c(props));
}

export function tint(c: ColorArgument, amount: number) {
  return (props: ColorProps) =>
    _tint(amount, typeof c === 'string' ? color(c)(props) : c(props));
}

export function fg(c: ColorArgument) {
  return css`
    color: ${typeof c === 'function' ? c : color(c)};
  `;
}

export function bg(c: ColorArgument) {
  return css`
    background-color: ${typeof c === 'string' ? color(c) : c};
  `;
}

/*
  Taken from https://github.com/WordPress/gutenberg/blob/master/assets/stylesheets/_colors.scss
  It'd be good if the design was more systematic and didn't reach for one off color use - the colors
  were configurable from the primary/secondary/warning/alert/success token... just like material does
*/
export const colors = {
  black: '#000',
  'dark-gray-900': '#191e23',
  'dark-gray-800': '#23282d',
  'dark-gray-700': '#32373c',
  'dark-gray-600': '#40464d',
  'dark-gray-500': '#555d66',
  'dark-gray-400': '#606a73',
  'dark-gray-300': '#6c7781',
  'dark-gray-200': '#7e8993',
  'dark-gray-150': '#8d96a0',
  'dark-gray-100': '#8f98a1',
  'light-gray-900': '#a2aab2',
  'light-gray-800': '#b5bcc2',
  'light-gray-700': '#ccd0d4',
  'light-gray-600': '#d7dade',
  'light-gray-500': '#e2e4e7',
  'light-gray-400': '#e8eaeb',
  'light-gray-300': '#edeff0',
  'light-gray-200': '#f3f4f5',
  'light-gray-100': '#f8f9f9',
  white: '#fff',

  'blue-medium-900': '#006589',
  'blue-medium-800': '#00739c',
  'blue-medium-700': '#007fac',
  'blue-medium-600': '#008dbe',
  'blue-medium-500': '#00a0d2',
  'blue-medium-400': '#33b3db',
  'blue-medium-300': '#66c6e4',
  'blue-medium-200': '#bfe7f3',
  'blue-medium-100': '#e5f5fa',
  'blue-medium-highlight': '#b3e7fe',
  'blue-medium-focus': '#007cba',

  'alert-yellow': '#f0b849',
  'alert-red': '#d94f4f',
  'alert-green': '#4ab866',
};
