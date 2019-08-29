import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          github
        }
      }
    }
  }
`;

export const SEO: React.FC<any> = (props = {} as any) => {
  const {meta, title, description, slug} = props;

  return (
    <StaticQuery
      query={query}
      render={data => {
        const {siteMetadata} = data.site;
        const metaDescription = description || siteMetadata.description;
        const baseUrl = '/';

        const url = `${baseUrl}${slug}`;

        return (
          <Helmet
            htmlAttributes={{lang: 'en'}}
            {...(title
              ? {
                  titleTemplate: `%s | ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: siteMetadata.title,
                })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.social.twitter,
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ].concat(meta)}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: '',
};

export default SEO;
