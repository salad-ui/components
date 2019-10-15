import * as React from 'react';
import styled from 'styled-components';
import {backgroundColor} from '@salad-ui/color';
import {body} from '@salad-ui/typography';
import {container} from '@salad-ui/container';

export default {
  title: 'components/Container',
};

const Wrapper = styled.span`
  ${container}
  ${body()}
  ${backgroundColor('background')}
`;

export const Example = () => {
  return (
    <>
      <Wrapper>Container - fixed width</Wrapper>
    </>
  );
};
