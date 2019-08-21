import * as React from 'react';
import {Global, Wrapper, Nav, Content, Footer} from './index.style';

const Layout: React.FC = ({children}) => (
  <>
    <Global />
    <Wrapper>
      <Nav>Design System Example</Nav>
      <Content>{children}</Content>
      <Footer>&copy; Copyright 2019.</Footer>
    </Wrapper>
  </>
);

export default Layout;
