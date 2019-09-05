import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {subtitle} from './subtitle';

const Subtitle = styled.p`
  ${subtitle({size: 'default'})}
`;

const SubtitleSmall = styled.p`
  ${subtitle({size: 'sm'})}
`;

storiesOf('Typography', module).add('Subtitle', () => (
  <>
    <Subtitle>Subtitle</Subtitle>
    <SubtitleSmall>Subtitle Small</SubtitleSmall>
  </>
));
