import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {get} from 'dot-prop';
import {Global, Wrapper, Nav, Content, Footer} from './index.style';
import {SiteMenuQuery, SiteSiteMetadataMenuLinks} from '../../graphqlTypes';

const menuQuery = graphql`
  query SiteMenu {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          href
        }
      }
    }
  }
`;

const Layout: React.FC = ({children}) => {
  const data = useStaticQuery<SiteMenuQuery>(menuQuery);
  const title = get<string>(data, 'site.siteMetadata.title');
  const menuLinks = get<SiteSiteMetadataMenuLinks[]>(
    data,
    'site.siteMetadata.menuLinks',
  );
  return (
    <>
      <Global />
      <Wrapper>
        <Nav>
          <span>{title}</span>
          <span>
            {menuLinks.map(link => (
              <a key={`${link.name}-${link.href}`} href={link.href || ''}>
                {link.name}
              </a>
            ))}
          </span>
        </Nav>
        <Content>{children}</Content>
        <Footer>&copy; Copyright 2019.</Footer>
      </Wrapper>
    </>
  );
};

export default Layout;
