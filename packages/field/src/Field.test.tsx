import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {Field, __USE_FIELDSET_PROP} from './Field';

const label = 'Username';
const help = 'Choose a unique name to be referred by.';
const error = 'Username taken.';

describe('Field', () => {
  test('rendered the input', () => {
    const {getByTestId} = render(
      <Theme>
        <Field label={label}>
          <input data-testid="child" />
        </Field>
      </Theme>,
    );
    getByTestId('child');
  });

  test('rendered a help message when the help message is provided', () => {
    const {queryByText} = render(
      <Theme>
        <Field label={label} help={help}>
          <input />
        </Field>
      </Theme>,
    );
    expect(
      queryByText('Choose a unique name to be referred by.'),
    ).not.toBeNull();
    expect(queryByText('Username taken.')).toBeNull();
  });

  test('rendered an error message instead of the help message when a help message and a error message are provided', () => {
    const {queryByText} = render(
      <Theme>
        <Field label={label} help={help} error={error}>
          <input />
        </Field>
      </Theme>,
    );
    expect(queryByText('Choose a unique name to be referred by.')).toBeNull();
    expect(queryByText('Username taken.')).not.toBeNull();
  });

  test('rendered a native input', () => {
    const {getByTestId} = render(
      <Theme>
        <Field label={label} help={help} error={error}>
          <input data-testid="input" />
        </Field>
      </Theme>,
    );
    const input = getByTestId('input');
    expect(input.getAttribute('aria-labelledby')).not.toBeNull();
    expect(input.getAttribute('aria-describedBy')).not.toBeNull();
  });

  test('rendered a custom component', () => {
    interface InputProps {
      isRequired?: string;
      isInvalid?: string;
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    // omit props
    const Input = ({isRequired, isInvalid, ...props}: InputProps) => (
      <input data-testid="input" {...props} />
    );
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const {getByTestId} = render(
      <Theme>
        <Field label={label} help={help} error={error}>
          <Input />
        </Field>
      </Theme>,
    );
    const input = getByTestId('input');
    expect(input.getAttribute('aria-labelledby')).not.toBeNull();
    expect(input.getAttribute('aria-describedBy')).not.toBeNull();
  });

  test('rendered a label for a single component', () => {
    const Input = () => null;
    const {container} = render(
      <Theme>
        <Field label={label} help={help} error={error}>
          <Input />
        </Field>
      </Theme>,
    );
    expect(container.querySelector('label')).not.toBeNull();
    expect(container.querySelector('fieldset')).toBeNull();
    expect(container.querySelector('legend')).toBeNull();
  });

  test('rendered a fieldset and legend for a group component', () => {
    const Input = () => null;
    (Input as any)[__USE_FIELDSET_PROP] = true;
    const {container} = render(
      <Theme>
        <Field label={label} help={help} error={error}>
          <Input />
        </Field>
      </Theme>,
    );
    expect(container.querySelector('label')).toBeNull();
    expect(container.querySelector('fieldset')).not.toBeNull();
    expect(container.querySelector('legend')).not.toBeNull();
  });
});
