import 'jest-styled-components';
import * as React from 'react';
import {ThemeProvider} from '@salad-ui/theme';
import {render} from '@testing-library/react';
import {TextInput} from './TextInput';

describe('TextInput', () => {
  test('rendered a normal input when isCompact=false', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isCompact={false} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  test('rendered a compact input when isCompact=true', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isCompact={true} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });

  test('rendered a normal input when isFullWidth=false', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isFullWidth={false} />
      </ThemeProvider>,
    );
    expect(container.firstChild).not.toHaveStyleRule('height');
  });

  test('rendered a full-width input when isFullWidth=true', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isFullWidth={true} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  test('rendered a normal input when isInvalid=false', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isInvalid={false} />
      </ThemeProvider>,
    );
    const el = container.firstChild as HTMLInputElement;
    expect(el).not.toBeNull();
    expect(el.getAttribute('aria-invalid')).toEqual('false');
    expect(el).not.toHaveStyleRule('color');
  });

  test('rendered an invalid input when isInvalid=true', () => {
    const {container} = render(
      <ThemeProvider>
        <TextInput isInvalid={true} />
      </ThemeProvider>,
    );
    const el = container.firstChild as HTMLInputElement;
    expect(el).not.toBeNull();
    expect(el.getAttribute('aria-invalid')).toEqual('true');
    expect(el).not.toHaveStyleRule('color');
  });
});
