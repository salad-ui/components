import * as React from 'react';
import {Wrapper, Title, Subtitle, Body, Button, Overline} from './index.style';

export const TypographyExample = () => (
  <Wrapper>
    <Title size="large">Title - large</Title>
    <Title size="medium">Title - medium</Title>
    <Title size="small">Title - small</Title>
    <Subtitle>Subtitle</Subtitle>
    <Subtitle isSmall>Subtitle - small</Subtitle>
    <Body>Body</Body>
    <Body isSmall>Body - small</Body>
    <Button>Button</Button>
    <Overline>Overline</Overline>
  </Wrapper>
);
