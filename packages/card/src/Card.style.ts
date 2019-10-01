import styled from 'styled-components';
import {p} from '@salad-ui/spacing';
import {color, backgroundColor, borderColor} from '@salad-ui/color';

export const Card = styled.div`
  ${p(2)}
  ${color('onSurface.normal')}
  ${backgroundColor('surface')}
  ${borderColor('border.light')}
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
`;
