import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {body} from './body';

const Body = styled.p`
  ${body({size: 'default'})}
`;

const BodySmall = styled.p`
  ${body({size: 'sm'})}
`;

storiesOf('Typography', module).add('Body', () => (
  <>
    <Body>Body</Body>
    <BodySmall>Body Small</BodySmall>
  </>
));
