import * as React from 'react';
import {render} from '@testing-library/react';
import {ButtonGroup} from './ButtonGroup';

const href = 'http://example.com/';

describe('ButtonGroup', () => {
  test('it renders buttons', () => {
    const {getByTestId} = render(
      <ButtonGroup size="sm">
        <ButtonGroup.Button
          variant="primary"
          href={href}
          isDisabled={false}
          data-testid="button-1"
        >
          Click me!
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="secondary"
          onClick={jest.fn()}
          isDisabled={false}
          data-testid="button-2"
        >
          Click me!
        </ButtonGroup.Button>
      </ButtonGroup>,
    );
    const button1 = getByTestId('button-1');
    const button2 = getByTestId('button-2');
    expect(button1.classList.contains('wp-button-group__button')).toBeTruthy();
    expect(button2.classList.contains('wp-button-group__button')).toBeTruthy();
  });

  // TODO: finish test cases
});
