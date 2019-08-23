import * as React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Global, Wrapper, Nav, Content, Footer} from './index.style';

const menuQuery = graphql`
  query SiteMenuQuery {
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

const Layout: React.FC = ({children}) => (
  <>
    <Global />
    <Wrapper>
      <Nav>
        <StaticQuery
          query={menuQuery}
          render={data => (
            <React.Fragment>
              <span>{data.site.siteMetadata.title}</span>
              <span>
                {data.site.siteMetadata.menuLinks.map((link: any) => (
                  <a key={link.href} href={link.href}>
                    {link.name}
                  </a>
                ))}
              </span>
            </React.Fragment>
          )}
        />
      </Nav>
      <Content>{children}</Content>
      <Footer>&copy; Copyright 2019.</Footer>
    </Wrapper>
  </>
);

export default Layout;
