import styled, {css} from 'styled-components';
import {px} from '@salad-ui/spacing';
import {getColor, color, borderColor} from '@salad-ui/color';
import {body} from '@salad-ui/typography';

const focusStyle = (colorName: string) => css`
  outline: none;
  ${borderColor(colorName)}
  box-shadow: 0 0 0 1px ${getColor(colorName)};
`;

export interface InputProps {
  isCompact?: boolean;
  isFullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  display: block;
  height: 40px;
  ${px(2)}
  ${color('onSurface.main')}
  ${body()}
  ${borderColor('border.main')}
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  ${({isCompact}) => (isCompact ? `height: 32px;` : `height: 40px;`)}
  ${({isFullWidth}) => isFullWidth && `width: 100%;`}
  
  :hover {
    ${borderColor('border.dark')}
  }

  :focus {
    ${focusStyle('secondary.main')}
  }

  &[aria-invalid="true"] {
    ${color('error.main')}
    ${focusStyle('error.main')}
  }
`;
