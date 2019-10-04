import React from 'react';
import {action} from '@storybook/addon-actions';

import {Link} from './Link';
import {Body, Subtitle, Title} from '@salad-ui/typography';

export default {
  title: 'components/Link',
};

const url = 'https://www.example.com/';

export const Examples = () => (
  <>
    A <Link href={url}>link</Link> with no container
    <br />
    <br />
    <Title size="large">
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Title size=&quot;large&quot;&gt;</code> component
    </Title>
    <Title size="medium">
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Title size=&quot;medium&quot;&gt;</code> component
    </Title>
    <Title size="small">
      A <Link href={url}>link</Link> and a{' '}
      <Link isSubtle href={url}>
        subtle link
      </Link>{' '}
      in a <code>&lt;Title size=&quot;small&quot;&gt;</code> component
    </Title>
    <br />
    <br />
    <Subtitle>
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Subtitle&gt;</code> component
    </Subtitle>
    <Subtitle isSmall>
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Subtitle isSmall&gt;</code> component
    </Subtitle>
    <br />
    <br />
    <Body>
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Body&gt;</code> component
    </Body>
    <Body isSmall>
      A <Link href={url}>link</Link> and a{' '}
      <Link href={url} isSubtle>
        subtle link
      </Link>{' '}
      in a <code>&lt;Body isSmall&gt;</code> component
    </Body>
  </>
);

export const Element = () => (
  <table>
    <thead>
      <tr>
        <th>as</th>
        <th>demo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <code>a</code>
        </th>
        <td>
          <Link href="https://www.example.com/">Click me!</Link>
        </td>
      </tr>
      <tr>
        <th>
          <code>button</code>
        </th>
        <td>
          <Link onClick={action('You clicked the link!')}>Click me!</Link>
        </td>
      </tr>
    </tbody>
  </table>
);
