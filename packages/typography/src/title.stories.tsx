import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {title} from './title';

const Title = styled.p`
  ${title()}
`;

storiesOf('Typography', module).add('Small Title', () => (
  <>
    <Title>Small Title</Title>
  </>
));
