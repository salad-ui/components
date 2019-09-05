import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {display} from './display';

const Large = styled.h1`
  ${display({size: 'lg'})}
`;

const Medium = styled.h2`
  ${display({size: 'md'})}
`;

const Small = styled.h3`
  ${display({size: 'sm'})}
`;

storiesOf('Typography', module).add('Display', () => (
  <>
    <Large>Display L</Large>
    <Medium>Display M</Medium>
    <Small>Display S</Small>
  </>
));
