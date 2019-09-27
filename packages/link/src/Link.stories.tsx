import React from 'react';
import {Link} from './Link';
import {Body, Subtitle, Title} from '@salad-ui/typography';

export default {
    title: 'components/Link',
};

export const example = () => (
  <>
    A <Link>link</Link> with no container
    <br />
    <br />
    <Title size="large">
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Title size=&quot;large&quot;&gt;</code> component
    </Title>
    <Title size="medium">
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Title size=&quot;medium&quot;&gt;</code> component
    </Title>
    <Title size="small">
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Title size=&quot;small&quot;&gt;</code> component
    </Title>
    <br />
    <br />
    <Subtitle>
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Subtitle&gt;</code> component
    </Subtitle>
    <Subtitle isSmall>
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Subtitle isSmall&gt;</code> component
    </Subtitle>
    <br />
    <br />
    <Body>
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Body&gt;</code> component
    </Body>
    <Body isSmall>
      A <Link>link</Link> and a <Link isSubtle>subtle link</Link> in a{' '}
        <code>&lt;Body isSmall&gt;</code> component
    </Body>
  </>
);
