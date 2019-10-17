/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import {Field} from '@salad-ui/field';
import {SelectInputProps, SelectInput} from '.';

export default {
  title: 'components/SelectInput',
};

const Input: React.FC<Partial<SelectInputProps>> = props => {
  return (
    <SelectInput autoFocus {...props}>
      <SelectInput.Option value="1">Under 18 years</SelectInput.Option>
      <SelectInput.Option value="2">18-24 years</SelectInput.Option>
      <SelectInput.Option value="3">25-34 years</SelectInput.Option>
      <SelectInput.Option value="4">35-44 years</SelectInput.Option>
      <SelectInput.Option value="5">45-54 years</SelectInput.Option>
      <SelectInput.Option value="6">Over 55 years</SelectInput.Option>
    </SelectInput>
  );
};

export const Demo = () => <Input />;

export const Invalid = () => <Input isInvalid />;

export const Disabled = () => <Input isDisabled />;

export const Compact = () => <Input isCompact />;

export const FullWidth = () => <Input isFullWidth />;

export const InAField = () => (
  <Field
    label="Age"
    help="We don't really need to know your age but we want you to tell us anyway."
  >
    <Input />
  </Field>
);
