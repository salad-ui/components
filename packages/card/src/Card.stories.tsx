import React from 'react';
import {Card} from '.';
import {Body, Title} from '@salad-ui/typography';

export default {
  title: 'components/Card',
};

export const example = () => (
  <>
    <Card>
      <Title size="medium">Site Title and Tagline</Title>
      <Body isSmall>
        Most themes display the site title at the top of every page, in the
        title bar of the browser, and as the identifying name for syndicated
        feeds. The tagline is also displayed by many themes.
      </Body>
    </Card>
  </>
);
