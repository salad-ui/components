import * as React from 'react';
import styled from 'styled-components';

import {NavLink as NavLinkBase} from '../..';

export const Menu: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/getting-started">Getting Started</NavLink>
      <NavLink to="/foundations">Foundations</NavLink>
      <NavLink to="/components">Components</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  > * {
    margin-right: 20px;
  }
`;

const NavLink = styled(NavLinkBase)`
  color: currentColor;
  opacity: 0.5;
  padding: 10px;
  text-decoration: none;

  &:hover {
    color: currentColor;
    opacity: 0.7;
  }

  &.is-active {
    color: #2271b1;
    opacity: 1;
  }
`;

export default Menu;
