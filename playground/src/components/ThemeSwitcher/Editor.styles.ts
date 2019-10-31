import styled from 'styled-components';
import {mr, spacings, p} from '@salad-ui/spacing';
import {borderColor, backgroundColor} from '@salad-ui/color';
import {grid, unit} from '@salad-ui/grid';

export const EditorWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  ${p(3)}
  ${backgroundColor('background')}
`;

export const ColorFields = styled.div`
  ${grid({})}
  & > * {
    ${mr(3)}
  }
`;

export const ColorFieldWrapper = styled.div`
  ${unit({size: {mobile: 1, tablet: 1 / 4, desktop: 1 / 8}})}
`;

export const ColorFieldInputWrapper = styled.div`
  position: relative;
  width: ${spacings[4]};
  height: ${spacings[4]};
`;

export interface ColorSwatchProps {
  color: string;
}

export const ColorSwatch = styled.button<ColorSwatchProps>`
  width: ${spacings[4]};
  height: ${spacings[4]};
  cursor: pointer;
  border: 1px solid;
  border-radius: 3px;
  ${borderColor('border')}
  background-color: ${({color}) => color};
`;
