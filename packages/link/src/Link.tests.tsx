import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Link} from './Link';

describe('Link', () => {
  test('it renders an anchor when a href is provided', () => {
    const {getByText} = render(
      <Theme>
        <Link href="http://example.com">Click me!</Link>
      </Theme>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('A');
  });

  test('it renders a button when an onClick is provided', () => {
    const {getByText} = render(
      <Theme>
        <Link onClick={jest.fn()}>Click me!</Link>
      </Theme>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('BUTTON');
  });
});
