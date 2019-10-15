import React from 'react';
import {Link} from '../../components';
import {Wrapper, Nav} from './index.styles';

export interface SidebarNavigationLinkProps {
  id: string;
  uri: string;
  title?: string;
}

export interface SidebarNavigationProps {
  links: SidebarNavigationLinkProps[];
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  links,
}) => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          {links
            .filter(link => Boolean(link.title))
            .map(link => (
              <li key={link.id}>
                <Link to={link.uri}>{link.title}</Link>
              </li>
            ))}
        </ul>
      </Nav>
    </Wrapper>
  );
};
