import * as React from 'react';
import {Title, Body} from '@salad-ui/typography';
import {Props} from './Props';
import {Code} from './Code';

/* eslint-disable react/display-name,@typescript-eslint/no-explicit-any */
// @see https://www.gatsbyjs.org/docs/mdx/customizing-components/
export const components = {
  /* make these components usable in mdx without having to import them */
  Props,

  /* style these components */

  h1: (props: any) => (
    <Title
      size="large"
      color="onSurface.main"
      component="h1"
      mt={4}
      mb={2}
      {...props}
    />
  ),
  h2: (props: any) => {
    return (
      <Title
        size="medium"
        color="onSurface.main"
        mt={4}
        mb={2}
        component="h2"
        {...props}
      />
    );
  },
  h3: (props: any) => (
    <Title
      size="small"
      color="onSurface.main"
      mt={4}
      mb={2}
      component="h3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Title
      size="small"
      color="onSurface.main"
      mt={4}
      mb={2}
      component="h4"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Title
      size="small"
      color="onSurface.main"
      mt={4}
      mb={2}
      component="h5"
      {...props}
    />
  ),
  h6: (props: any) => (
    <Title
      size="small"
      color="onSurface.main"
      mt={4}
      mb={2}
      component="h6"
      {...props}
    />
  ),

  p: (props: any) => <Body color="onSurface.subtle" my={1} {...props} />,
  li: (props: any) => (
    <Body color="onSurface.subtle" {...props} component="li" />
  ),

  code: Code,
};
/* eslint-enable react/display-name */
