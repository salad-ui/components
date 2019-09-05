import React from 'react';
import styled from 'styled-components';

import {useLinksFromQuery} from './utils';
import {Link} from '../../components';

const Navigation: React.FC = () => {
  const links = useLinksFromQuery();

  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link to="/components">Get Started</Link>
          </li>
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: calc(56px + 32px);
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    display: block;
    padding: 8px 0;
  }
`;

export default Navigation;
