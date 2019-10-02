import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {getPageTitle} from '../../utils/getPageTitle';
import {getLinksFromQuery} from '../../utils/getLinksFromQuery';
import {SEO} from '../../components/SEO';
import {SiteLayout} from '../../components/SiteLayout';
import {SidebarNavigation} from '../../components/SidebarNavigation';

const query = graphql`
  query ComponentLinks {
    allSitePage(
      filter: {
        fields: {category: {eq: "components"}, uri: {ne: "/components/"}}
      }
      sort: {fields: context___frontmatter___title}
    ) {
      edges {
        node {
          id
          fields {
            uri
            category
          }
          context {
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

const ComponentLayout: React.FC = ({children, ...otherProps}) => {
  const title = getPageTitle(otherProps);
  const links = getLinksFromQuery(useStaticQuery(query));
  return (
    <>
      <SEO title={title} />
      <SiteLayout sidebar={<SidebarNavigation links={links} />}>
        <h1>{title}</h1>
        {children}
      </SiteLayout>
    </>
  );
};

export default ComponentLayout;
