import React from 'react';
import {storiesOf} from '@storybook/react';
import styled from 'styled-components';
import {button} from './button';

const Button = styled.p`
  ${button()}
`;

storiesOf('Typography', module).add('Button', () => (
  <>
    <Button>Button</Button>
  </>
));
