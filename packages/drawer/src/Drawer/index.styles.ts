import styled from 'styled-components';
import {color, backgroundColor} from '@salad-ui/color';

export const Wrapper = styled.nav`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 216px;
  ${color('onPrimary')}
  ${backgroundColor('primary.main')}
`;

export const TopWrapper = styled.div``;

export const BottomWrapper = styled.div``;
