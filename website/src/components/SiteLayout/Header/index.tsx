import * as React from 'react';
import styled from 'styled-components';

import {Container} from '../Container';
import Flexy from '../../Flexy';
import Menu from './Menu';
import Logo from './Logo';

export const Header: React.FC = () => {
  return (
    <HeaderNav>
      <Container>
        <Flexy>
          <Flexy.Item>
            <Logo />
          </Flexy.Item>
          <Flexy.Block>
            <Menu />
          </Flexy.Block>
        </Flexy>
      </Container>
    </HeaderNav>
  );
};

export const HeaderNav = styled.div`
  align-items: center;
  background: var(--colorBackground);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  height: 68px;
  justify-content: space-between;
  z-index: 10;
`;
