import * as React from 'react';
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';
import {getPageTitle} from '../../utils/getPageTitle';
import {getLinksFromQuery} from '../../utils/getLinksFromQuery';
import {SiteLayout} from '../../components/SiteLayout';
import {SidebarNavigation} from '../../components/SidebarNavigation';

const query = graphql`
  query FoundationLinks {
    allSitePage(
      filter: {
        fields: {category: {eq: "foundations"}, uri: {ne: "/foundations/"}}
      }
      sort: {fields: context___frontmatter___title}
    ) {
      ...LinkInfo
    }
  }
`;

const FoundationLayout: React.FC = ({children, ...otherProps}) => {
  const title = getPageTitle(otherProps);
  const links = getLinksFromQuery(useStaticQuery(query));
  return (
    <>
      <Helmet title={title} />
      <SiteLayout sidebar={<SidebarNavigation links={links} />}>
        <h1>{title}</h1>
        {children}
      </SiteLayout>
    </>
  );
};

export default FoundationLayout;
