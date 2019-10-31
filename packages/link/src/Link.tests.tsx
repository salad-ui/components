import * as React from 'react';
import {ThemeProvider} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Link} from './Link';

describe('Link', () => {
  test('it renders an anchor when a href is provided', () => {
    const {getByText} = render(
      <ThemeProvider>
        <Link href="http://example.com">Click me!</Link>
      </ThemeProvider>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('A');
  });

  test('it renders a button when an onClick is provided', () => {
    const {getByText} = render(
      <ThemeProvider>
        <Link onClick={jest.fn()}>Click me!</Link>
      </ThemeProvider>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('BUTTON');
  });
});
