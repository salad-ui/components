import {css, ThemedStyledProps} from 'styled-components';
import {shade as _shade, tint as _tint} from 'polished';

export interface ColorThemeProps {
  color: {[name: string]: string};
}

export type ColorPath = string;
export type ColorFunction<P extends object, T extends ColorThemeProps> = (
  props: ThemedStyledProps<P, T>,
) => string;
export type ColorArgument<P extends object, T extends ColorThemeProps> =
  | ColorPath
  | ColorFunction<P, T>;

export function color<P extends object, T extends ColorThemeProps>(
  path: string,
) {
  return ({theme}: ThemedStyledProps<P, T>) => theme.color[path];
}

export function shade<P extends object, T extends ColorThemeProps>(
  c: ColorArgument<P, T>,
  amount: number,
) {
  return (props: ThemedStyledProps<P, T>) =>
    _shade(amount, typeof c === 'string' ? color(c)(props) : c(props));
}

export function tint<P extends object, T extends ColorThemeProps>(
  c: ColorArgument<P, T>,
  amount: number,
) {
  return (props: ThemedStyledProps<P, T>) =>
    _tint(amount, typeof c === 'string' ? color(c)(props) : c(props));
}

export function fg<P extends object, T extends ColorThemeProps>(
  c: ColorArgument<P, T>,
) {
  return css`
    color: ${typeof c === 'string' ? color(c) : c};
  `;
}

export function bg<P extends object, T extends ColorThemeProps>(
  c: ColorArgument<P, T>,
) {
  return css`
    background-color: ${typeof c === 'string' ? color(c) : c};
  `;
}

// https://github.com/WordPress/gutenberg/blob/master/assets/stylesheets/_colors.scss
export const colors = {
  black: '#000',
  'dark-gray-900': '#191e23',
  'dark-gray-800': '#23282d',
  'dark-gray-700': '#32373c',
  'dark-gray-600': '#40464d',
  'dark-gray-500': '#555d66', // Use this most of the time for dark items.
  'dark-gray-400': '#606a73',
  'dark-gray-300': '#6c7781', // Lightest gray that can be used for AA text contrast.
  'dark-gray-200': '#7e8993',
  'dark-gray-150': '#8d96a0', // Lightest gray that can be used for AA non-text contrast.
  'dark-gray-100': '#8f98a1',
  'light-gray-900': '#a2aab2',
  'light-gray-800': '#b5bcc2',
  'light-gray-700': '#ccd0d4',
  'light-gray-600': '#d7dade',
  'light-gray-500': '#e2e4e7', // Good for "grayed" items and borders.
  'light-gray-400': '#e8eaeb', // Good for "readonly" input fields and special text selection.
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
};
