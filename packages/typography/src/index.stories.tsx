import React from 'react';
import styled from 'styled-components';
import {Body, button, caption, overline, Subtitle, Title} from '.';

export default {title: 'foundations/typography'};

const Button = styled.span`
  ${button}
`;

const Caption = styled.p`
  ${caption}
`;

const Overline = styled.h1`
  ${overline}
`;

export const example = () => (
  <>
    <Title size="large">Title Large</Title>
    <Title size="medium" component="h2">
      Title Medium
    </Title>
    <Title size="small" component="h3">
      Title Small
    </Title>
    <Subtitle>Subtitle</Subtitle>
    <Subtitle isSmall component="h2">
      Subtitle Small
    </Subtitle>
    <Body>Body</Body>
    <Body isSmall>Body Small</Body>
    <Button>Button</Button>
    <Caption>Caption</Caption>
    <Overline>Overline</Overline>
  </>
);
