import styled, {css} from 'styled-components';
import {backgroundColor} from '@salad-ui/color';
import {AvatarSize} from './types';

export interface WrapperProps {
  $size?: AvatarSize;
}

const sizeStyle = ({$size}: WrapperProps) => {
  switch ($size) {
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
};

const style = css<WrapperProps>`
  display: inline-flex;
  overflow: hidden;
  border-radius: 50%;
  ${sizeStyle}
  ${backgroundColor('onSurface.subtle')}
`;

export const Image = styled.img`
  ${style}
`;

export const ImageButton = styled.input`
  ${style}
`;
