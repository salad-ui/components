import React from 'react';
import styled from 'styled-components';
import {caption} from './caption';

export default {title: 'typography/caption'};

const Caption = styled.p`
  ${caption()}
`;

export const sizes = () => (
  <>
    <Caption>default</Caption>
  </>
);
