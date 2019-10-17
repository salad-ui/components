import React from 'react';
import {text, boolean} from '@storybook/addon-knobs';
import {Field} from './Field';
import {TextInput} from '@salad-ui/text-input';

export default {
  title: 'components/Field',
};

const label = 'Username';
const help = 'Choose a unique handle to go by.';
const error = 'Username already taken.';

export const Demo = () => {
  const errorKnob = text('error', error);
  return (
    <Field
      label={text('label', label)}
      help={text('help', help)}
      error={errorKnob}
      isRequired={boolean('isRequired', false)}
    >
      <TextInput isInvalid={Boolean(errorKnob)} />
    </Field>
  );
};

export const Help = () => (
  <Field label={label} help={help}>
    <TextInput />
  </Field>
);

export const Error: React.FC = () => (
  <Field label={label} help={help} error={error}>
    <TextInput defaultValue="john.smith" />
  </Field>
);
