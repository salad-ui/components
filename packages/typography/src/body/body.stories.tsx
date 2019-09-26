import React from 'react';
import styled from 'styled-components';
import {body} from './body';

export default {title: 'typography/body'};

const Body = styled.h1`
  ${body}
`;

export const sizes: React.FC = () => (
  <>
    <Body size="large">Large</Body>
    <Body size="small" as="h2">
      Small
    </Body>
  </>
);
