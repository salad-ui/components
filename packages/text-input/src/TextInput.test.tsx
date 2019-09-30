import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {TextInput} from './TextInput';

describe('TextInput', () => {
  // TODO:
  test('it renders', () => {
    render(
      <Theme>
        <TextInput id="abc" />
      </Theme>,
    );
  });
});
