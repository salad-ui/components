import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {link} from './link';

const Link = styled.a`
  ${link()}
`;

storiesOf('Typography', module).add('Link', () => (
  <>
    <Link>A link</Link>
  </>
));
