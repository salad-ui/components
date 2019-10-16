import styled from 'styled-components';
import {backgroundColor} from '@salad-ui/color';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 216px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  ${backgroundColor('background')}
`;

export const HeaderWrapper = styled.div`
  grid-column: span 2;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;
