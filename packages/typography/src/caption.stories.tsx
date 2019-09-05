import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {caption} from './caption';

const Caption = styled.p`
  ${caption()}
`;

storiesOf('Typography', module).add('Caption', () => (
  <>
    <Caption>Caption</Caption>
  </>
));
