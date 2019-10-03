import {css} from 'styled-components';
import {getColor} from '@salad-ui/color';

export const focusStyle = (colorName?: string) => css`
  outline: none;
  box-shadow: 0 0 0 2px ${colorName ? getColor(colorName) : '#2271B1'};
`;
