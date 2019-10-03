import styled from 'styled-components';
import {px} from '@salad-ui/spacing';
import {color, borderColor} from '@salad-ui/color';
import {body} from '@salad-ui/typography';
import {focusStyle} from '@salad-ui/utils';

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

  &[aria-invalid="true"] {
    ${color('error.main')}
    ${borderColor('error.main')}
    ${focusStyle('error.main')}
  }
  
  :focus {
    ${focusStyle()}
    ${borderColor('error.main')}
  }

`;
