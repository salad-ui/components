import {css} from 'styled-components';
import {getColor} from '@salad-ui/color';

export const focusStyle = (colorName?: string) => {
  return css`
    outline: none;
    box-shadow: inset 0 0 0 2px ${colorName ? getColor(colorName) : '#2271B1'};
  `;
};
