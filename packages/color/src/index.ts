import {get} from 'lodash-es';
import {StyledProps, css} from 'styled-components';

export const getColor = (name: string) => <P>({theme}: StyledProps<P>) => {
  const value = get(theme.color, name);
  if (value === undefined) {
    console.error(`Color "${name}" cannot be found on the theme`);
    return 'inherit';
  }
  return value;
};
export const color = (name: string) =>
  css`
    color: ${getColor(name)};
  `;
export const backgroundColor = (name: string) =>
  css`
    background-color: ${getColor(name)};
  `;
export const borderColor = (name: string) =>
  css`
    border-color: ${getColor(name)};
  `;
