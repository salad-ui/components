import * as React from 'react';
import {Container} from '@salad-ui/container';

export default {
  title: 'components/Container',
};

export const Example = () => {
  return (
    <>
      <Container
        color="onSecondary"
        backgroundColor="secondary.light"
        paddingX={{mobile: 2, desktop: 0}}
        paddingY={4}
      >
        Container
      </Container>
    </>
  );
};
