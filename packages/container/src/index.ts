import styled, {css} from 'styled-components';
import {box} from '@salad-ui/box';

export const container = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  ${box}
`;

export const Container = styled.div`
  ${container}
`;
