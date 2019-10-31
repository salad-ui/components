import styled from 'styled-components';
import {unit} from '@salad-ui/grid';
import {m, pt, pl} from '@salad-ui/spacing';
import {borderRightColor} from '@salad-ui/color';
import {body} from '@salad-ui/typography';

export const Description = styled.p`
  overflow: hidden;
  height: 80px;
  ${m(0)}
  ${body({isSmall: true})}
`;

export const Detail = styled.div`
  ${unit({size: 1 / 3})}
  ${pt(0.5)}
  ${pl(2)}
  border-right: 1px solid;
  ${borderRightColor('border.light')}
  :last-child {
    border: none;
  }
  :first-child {
    ${pl(0)}
  }
`;
