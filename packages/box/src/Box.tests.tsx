import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Box} from './Box';

describe('Box', () => {
  test('it renders an anchor when a href is provided', () => {
    render(
      <Theme>
        <Box>Click me!</Box>
      </Theme>,
    );
  });
});
