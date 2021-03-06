/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import {boolean, text} from '@storybook/addon-knobs';
import {Field} from '@salad-ui/field';
import {TextInputProps, TextInput} from './TextInput';

export default {
  title: 'components/TextInput',
};

const Input: React.FC<Partial<TextInputProps>> = props => (
  <TextInput autoFocus placeholder="john.smith@example.com.au" {...props} />
);

export const Demo = () => (
  <Input
    onChange={() => {}}
    value={text('value', '')}
    placeholder={text('placeholder', 'john.smith@example.com.au')}
    isCompact={boolean('isCompact', false)}
    isFullWidth={boolean('isFullWidth', false)}
    isInvalid={boolean('isInvalid', false)}
    isRequired={boolean('isRequired', false)}
    isDisabled={boolean('isDisabled', false)}
  />
);

export const Invalid = () => <Input isInvalid />;

export const Disabled = () => <Input isDisabled />;

export const Compact = () => <Input isCompact />;

export const FullWidth = () => <Input isFullWidth />;

export const InAField = () => (
  <Field
    label="Email"
    help="Provide us with your email address so we can send you a tonne of emails you'll never read."
  >
    <Input />
  </Field>
);
