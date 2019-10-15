import styled, { css } from 'styled-components';
import { get } from '@salad-ui/color';
import { LogoSize } from './types';
import { Color } from 'csstype';

export interface WrapperProps {
  size?: LogoSize;
  color?: Color;
}

const sizeStyle = ({size}: WrapperProps) => {
  switch (size) {
    case 'small': {
      return `
        width: 24px;
        height: 24px;
      `;
    }
    default: {
      return undefined;
    }
  }
}

export const Wrapper = styled.span<WrapperProps>`
  display: inline-flex;
  & > svg {
    ${sizeStyle}
    ${({color}) => color && css`fill: ${get(color)};`};
  }
`;
