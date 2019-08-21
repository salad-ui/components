import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Nav = styled.nav`
  background-color: #ccc;
`;

export const Content = styled.div`
  background-color: #fff;
`;

export const Footer = styled.nav`
  background-color: #ccc;
`;
