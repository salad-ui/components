import styled, {createGlobalStyle} from 'styled-components';
import {container} from '@salad-ui/container';
import {fadeIn} from '../../mixins/fadeIn';
import {m, p} from '@salad-ui/spacing';

export const GlobalStyle = createGlobalStyle`
  html, body {
    ${m(0)};
    ${p(0)}
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  ${container}
`;

export const SidebarWrapper = styled.div`
  width: 150px;
`;

export const ContentWrapper = styled.div`
  ${fadeIn}
`;
