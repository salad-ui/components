import * as React from 'react';
import {Title, Body} from '@salad-ui/typography';
import {mt, mb} from '@salad-ui/spacing';
import {Props} from './Props';
import {Code} from './Code';

/* eslint-disable react/display-name,@typescript-eslint/no-explicit-any */
// @see https://www.gatsbyjs.org/docs/mdx/customizing-components/
export const components = {
  /* make these components usable in mdx without having to import them */
  Props,

  /* style these components */

  h1: (props: any) => <Title size="large" css={[mt(4), mb(1)]} {...props} />,
  h2: (props: any) => (
    <Title size="medium" as="h2" css={[mt(4), mb(1)]} {...props} />
  ),
  h3: (props: any) => (
    <Title size="small" as="h3" css={[mt(4), mb(1)]} {...props} />
  ),
  h4: (props: any) => (
    <Title size="small" as="h4" css={[mt(4), mb(1)]} {...props} />
  ),
  h5: (props: any) => (
    <Title size="small" as="h5" css={[mt(4), mb(1)]} {...props} />
  ),
  h6: (props: any) => (
    <Title size="small" as="h6" css={[mt(4), mb(1)]} {...props} />
  ),

  p: (props: any) => <Body css={[mt(1), mb(1)]} {...props} />,

  code: Code,
};
/* eslint-enable react/display-name */
