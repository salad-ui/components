import * as React from 'react';
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';
import {Title} from '@salad-ui/typography';
import {getPageTitle} from '../../utils/getPageTitle';
import {getLinksFromQuery} from '../../utils/getLinksFromQuery';
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
      ...LinkInfo
    }
  }
`;

const ComponentLayout: React.FC = ({children, ...otherProps}) => {
  const title = getPageTitle(otherProps);
  const links = getLinksFromQuery(useStaticQuery(query));
  return (
    <>
      <Helmet title={title} />
      <SiteLayout sidebar={<SidebarNavigation links={links} />}>
        <Title size="large">{title}</Title>
        {children}
      </SiteLayout>
    </>
  );
};

export default ComponentLayout;
