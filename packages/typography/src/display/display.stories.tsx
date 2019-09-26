import React from 'react';
import styled from 'styled-components';
import {display} from './display';

export default {title: 'typography/display'};

const Display = styled.h1`
  ${display}
`;

export const sizes = () => (
  <>
    <Display size="large">Large</Display>
    <Display size="medium" as="h2">
      Medium
    </Display>
    <Display size="small" as="h3">
      Small
    </Display>
  </>
);
