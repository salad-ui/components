import {get} from 'dot-prop';
import {kebabCase} from 'lodash';
import {graphql, useStaticQuery} from 'gatsby';

const PageNavQuery = graphql`
  query PageNavQuery {
    allMdx(filter: {fileAbsolutePath: {glob: "**/components/**/*.mdx"}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export function useLinksFromQuery() {
  const queryData = useStaticQuery(PageNavQuery);
  const edges = get(queryData, 'allMdx.edges') as any[];

  const links = edges
    .map(edge => {
      const id = get(edge, 'node.id') as string;

      const title = get(edge, 'node.frontmatter.title') as string;
      const slug = kebabCase(title);
      const url = `/components/${slug}/`;

      return {
        title,
        id,
        url,
        slug,
      };
    })
    .filter(link => {
      return link.slug !== 'components';
    });

  return links;
}
