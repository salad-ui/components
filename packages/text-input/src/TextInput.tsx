import * as React from 'react';
import {Input} from './TextInput.style';

export interface InputProps {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export const TextInput = ({id, value, onChange, defaultValue}: InputProps) => {
  return (
    <Input
      id={id}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};
