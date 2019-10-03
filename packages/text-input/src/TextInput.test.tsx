import 'jest-styled-components';
import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {TextInput} from './TextInput';

describe('TextInput', () => {
  test('rendered a normal input when isCompact=false', () => {
    const {container} = render(
      <Theme>
        <TextInput isCompact={false} />
      </Theme>,
    );
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  test('rendered a compact input when isCompact=true', () => {
    const {container} = render(
      <Theme>
        <TextInput isCompact={true} />
      </Theme>,
    );
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });

  test('rendered a normal input when isFullWidth=false', () => {
    const {container} = render(
      <Theme>
        <TextInput isFullWidth={false} />
      </Theme>,
    );
    expect(container.firstChild).not.toHaveStyleRule('height');
  });

  test('rendered a full-width input when isFullWidth=true', () => {
    const {container} = render(
      <Theme>
        <TextInput isFullWidth={true} />
      </Theme>,
    );
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  test('rendered a normal input when isInvalid=false', () => {
    const {container} = render(
      <Theme>
        <TextInput isInvalid={false} />
      </Theme>,
    );
    const el = container.firstChild as HTMLInputElement;
    expect(el).not.toBeNull();
    expect(el.getAttribute('aria-invalid')).toEqual('false');
    expect(el).not.toHaveStyleRule('color');
  });

  test('rendered an invalid input when isInvalid=true', () => {
    const {container} = render(
      <Theme>
        <TextInput isInvalid={true} />
      </Theme>,
    );
    const el = container.firstChild as HTMLInputElement;
    expect(el).not.toBeNull();
    expect(el.getAttribute('aria-invalid')).toEqual('true');
    expect(el).not.toHaveStyleRule('color');
  });
});
