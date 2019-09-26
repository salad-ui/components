import React from 'react';
import styled from 'styled-components';
import {title} from './title';

export default {title: 'typography/title'};

const Title = styled.h1`
  ${title()}
`;

export const sizes = () => (
  <>
    <Title>default</Title>
  </>
);
