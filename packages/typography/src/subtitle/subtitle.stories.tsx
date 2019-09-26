import React from 'react';
import styled from 'styled-components';
import {subtitle} from './subtitle';

export default {title: 'typography/subtitle'};

const SubTitle = styled.h1`
  ${subtitle}
`;

export const sizes = () => (
  <>
    <SubTitle size="large">Large</SubTitle>
    <SubTitle size="small" as="h2">
      Small
    </SubTitle>
  </>
);
