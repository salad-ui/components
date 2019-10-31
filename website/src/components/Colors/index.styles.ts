import styled from 'styled-components';
import {my, ml, p} from '@salad-ui/spacing';
import {color, backgroundColor, borderColor, ColorName} from '@salad-ui/color';

export interface ColorShadeProps {
  fg: ColorName;
  bg: ColorName;
}

export const ColorShadeName = styled.code``;
export const ColorShadeValue = styled.code``;

export const ColorShade = styled.div<ColorShadeProps>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  ${p(1.5)}
  ${({fg}) => color(fg)}
  ${({bg}) => backgroundColor(bg)}

  :hover {
    opacity: 0.75;
    transition: 0.1s ease-in-out opacity;
  }
`;

export const Color = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 280px;
  ${borderColor('border')}
  border: 1px solid;
  border-radius: 4px;
  overflow: hidden;

  & + & {
    ${ml(2)}
  }
`;

export const Colors = styled.div`
  ${my(2)}
  display: flex;
`;
