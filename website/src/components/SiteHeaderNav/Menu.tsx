import * as React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

interface NavLinkBaseProps {
  children: React.ReactNode;
  to: string;
}

export const Menu: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/get-started">Get Started</NavLink>
      <NavLink to="/components">Components</NavLink>
    </Nav>
  );
};

export const NavLinkBase: React.FC<NavLinkBaseProps> = props => {
  return <Link {...props} activeClassName="is-active" />;
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

  &.active {
    color: #0055ff;
    font-weight: bold;
  }
`;

export default Menu;
