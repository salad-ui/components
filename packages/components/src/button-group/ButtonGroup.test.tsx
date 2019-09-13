import * as React from 'react';
import {render} from '@testing-library/react';
import {ButtonGroup} from './ButtonGroup';

const href = 'http://wordpress.com/';

describe('ButtonGroup', () => {
  test('it renders buttons', () => {
    const {getByText} = render(
      <ButtonGroup size="sm">
        <ButtonGroup.Button variant="primary" href={href} isDisabled={false}>
          Click me!
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="secondary"
          onClick={jest.fn()}
          isDisabled={false}
        >
          Click me!
        </ButtonGroup.Button>
      </ButtonGroup>,
    );
    const element = getByText('Click me!');
    expect(element.tagName).toEqual('A');
  });

  // TODO: finish test cases
});
