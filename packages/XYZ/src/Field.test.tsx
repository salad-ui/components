import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Field} from './Field';

const id = 'username';
const label = 'Username';
const help = 'Choose a unique name to be referred by.';
const error = 'Username taken.';

describe('Field', () => {
  test('rendered children', () => {
    const {getByTestId} = render(
      <Theme>
        <Field id={id} label={label}>
          <input id={id} data-testid="child" />
        </Field>
      </Theme>,
    );
    getByTestId('child');
  });

  test('rendered a help message when a help message is provided', () => {
    const {queryByText} = render(
      <Theme>
        <Field id={id} label={label} help={help}>
          <input id={id} />
        </Field>
      </Theme>,
    );
    expect(
      queryByText('Choose a unique name to be referred by.'),
    ).not.toBeNull();
  });

  test('rendered an error message instead of a help message when both help and error messages are provided', () => {
    const {queryByText} = render(
      <Theme>
        <Field id={id} label={label} help={help} error={error}>
          <input id={id} />
        </Field>
      </Theme>,
    );
    expect(queryByText('Choose a unique name to be referred by.')).toBeNull();
    expect(queryByText('Username taken.')).not.toBeNull();
  });
});
