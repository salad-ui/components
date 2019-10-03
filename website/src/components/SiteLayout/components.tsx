import * as React from 'react';
import {Title, Body} from '@salad-ui/typography';

/* eslint-disable react/display-name,@typescript-eslint/no-explicit-any */
// @see https://www.gatsbyjs.org/docs/mdx/customizing-components/
export const components = {
  h1: (props: any) => <Title size="large" {...props} />,
  h2: (props: any) => <Title size="medium" {...props} />,
  h3: (props: any) => <Title size="small" {...props} />,
  h4: (props: any) => <Title size="small" {...props} />,
  h5: (props: any) => <Title size="small" {...props} />,
  h6: (props: any) => <Title size="small" {...props} />,
  p: Body,
};
/* eslint-enable react/display-name */
