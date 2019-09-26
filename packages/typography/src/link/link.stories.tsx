import React from 'react';
import {link} from './link';
import styled from 'styled-components';

export default {title: 'typography/link'};

const Link = styled.a`
  ${link()}
`;

export const Sizes = () => (
  <>
    <Link href="#nowhere">default</Link>
  </>
);
