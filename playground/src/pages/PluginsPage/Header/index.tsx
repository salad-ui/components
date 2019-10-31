import * as React from 'react';
import {Box} from '@salad-ui/box';
import {Button} from '@salad-ui/button';
import {StyledTitle, StyledBody} from './index.styles';

export const Header = () => (
  <Box
    component="header"
    paddingX={{mobile: 2, tablet: 3}}
    paddingTop={{mobile: 6, tablet: 3}}
    paddingBottom={2}
  >
    <StyledTitle
      size="medium"
      color="onBackground"
      component="h1"
      marginRight={1.5}
    >
      Add Plugins
    </StyledTitle>
    <Button variant="primary" isCompact>
      Upload Plugin
    </Button>
    <StyledBody color="onBackground.subtle" marginTop={1.5}>
      Plugins extend and expand the functionality of WordPress. You may
      automatically install plugins from the WordPress Plugin Directory or
      upload a plugin in .zip format by clicking the button at the top of this
      page.
    </StyledBody>
  </Box>
);
