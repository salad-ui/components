import styled from 'styled-components';
import {px} from '@salad-ui/spacing';
import {getColor, color, borderColor} from '@salad-ui/color';
import {body} from '@salad-ui/typography';

export const Input = styled.input`
  display: block;
  ${px(2)}
  ${color('onSurface.normal')}
  ${body()}
  ${borderColor('border.normal')}
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;

  :focus {
    ${borderColor('primary.normal')}
    box-shadow: 0 0 0 1px ${getColor('primary.normal')};
  }
`;
