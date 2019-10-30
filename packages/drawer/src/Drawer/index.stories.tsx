import * as React from 'react';
import {Drawer} from '..';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
`;

export default {
  title: 'components/drawer/Drawer',
};

export const Demo = () => (
  <Wrapper>
    <Drawer top="A drawer with nothing interesting in it" />
  </Wrapper>
);
