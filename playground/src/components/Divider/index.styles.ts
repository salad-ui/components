import styled from 'styled-components';
import {borderColor} from '@salad-ui/color';
import {my} from '@salad-ui/spacing';

export const Divider = styled.hr`
  ${my(1)}
  border: none;
  border-top: 1px solid;
  ${borderColor('border.dark')}
`;
