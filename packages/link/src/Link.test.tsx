import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Link} from './Link';

const href = 'http://example.com/';

describe('Link', () => {
  test('it renders an anchor', () => {
    const {getByText} = render(
      <Theme>
        <Link href={href}>Click me!</Link>
      </Theme>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('A');
  });
});
