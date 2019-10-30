import styled from 'styled-components';
import {body} from '@salad-ui/typography';

export const Description = styled.p`
  overflow: hidden;
  height: 80px;
  ${body({isSmall: true})}
`;
