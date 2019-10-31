import * as React from 'react';
import {Link} from 'react-router-dom';
import {Title, Subtitle, Body} from '@salad-ui/typography';
import {Link as NormalLink} from '@salad-ui/link';
import {Container} from '@salad-ui/container';

const IntroPage = () => (
  <>
    <Container>
      <Title size="large">
        <span role="img" aria-hidden={true}>
          🥗
        </span>{' '}
        <code>salad-ui</code> &mdash; Playground
      </Title>
      <Body marginTop={1}>
        A life-like appliction for testing some of the ideas in{' '}
        <NormalLink
          href="https://www.figma.com/file/7xhcuCZhQKqgRsgLTof3AY/WP-Admin-Iterations?node-id=41%3A0"
          target="_blank"
          rel="nofollow"
        >
          WP-Admin-Iterations
        </NormalLink>
        .
      </Body>
      <Subtitle marginTop={2}>Quick links</Subtitle>
      <Body component="ul">
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/plugins/featured">Plugins</Link>
        </li>
      </Body>
    </Container>
  </>
);

export default IntroPage;
