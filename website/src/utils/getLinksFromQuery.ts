import {graphql} from 'gatsby';
import {get} from 'dot-prop';

export interface Link {
  id: string;
  uri: string;
  title?: string;
  category?: string;
}

graphql`
  fragment LinkInfo on SitePageConnection {
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
`;

export const getLinksFromQuery = (data: any): Link[] => {
  return data.allSitePage.edges.map((edge: any) => ({
    id: get(edge, 'node.id'),
    uri: get(edge, 'node.fields.uri'),
    title: get(edge, 'node.context.frontmatter.title'),
    category: get(edge, 'node.fields.category'),
  }));
};
