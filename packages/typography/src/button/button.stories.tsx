import React from 'react';
import styled from 'styled-components';
import {button} from './button';

export default {title: 'typography/button'};

const Button = styled.button`
  ${button}
`;

export const sizes = () => (
  <>
    <Button size="large">Large</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
  </>
);
