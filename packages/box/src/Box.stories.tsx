import React from 'react';
import {Box} from '.';

export default {
  title: 'components/Box',
};

export const Examples = () => (
  <>
    <Box
      color="onPrimary"
      backgroundColor="secondary.main"
      paddingX={{mobile: 2, tablet: 4}}
      paddingY={{mobile: 3, tablet: 6}}
    >
      Some content in a box!
    </Box>
  </>
);
