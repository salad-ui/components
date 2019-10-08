import {css} from 'styled-components';
import {get} from '@salad-ui/color';

export const focusStyle = (colorName?: string) => {
  return css`
    outline: none;
    box-shadow: inset 0 0 0 2px ${colorName ? get(colorName) : '#2271B1'};
  `;
};
