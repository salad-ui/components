import * as React from 'react';
import {Input} from './TextInput.style';
// import {__USE_FIELDSET_PROP} from '@salad-ui/field';

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps {
  // value
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;

  // validation
  isRequired?: boolean;
  isInvalid?: boolean;

  // size/layout
  isCompact?: boolean;
  isFullWidth?: boolean;

  // accessibility
  'aria-labelledby'?: string;
  'aria-describedby'?: string;

  // other
  id?: Attributes['id'];
  name?: Attributes['name'];
  placeholder?: Attributes['placeholder'];
  pattern?: Attributes['pattern'];
  max?: Attributes['max'];
  min?: Attributes['min'];
  maxLength?: Attributes['maxLength'];
  minLength?: Attributes['minLength'];
  step?: Attributes['step'];
  autoFocus?: Attributes['autoFocus'];
}

export const TextInput: React.FC<InputProps> = ({
  isInvalid,
  isRequired,
  ...otherProps
}) => {
  return (
    <Input
      {...otherProps}
      aria-required={isRequired}
      aria-invalid={isInvalid}
    />
  );
};

// tell Field not to use a group
// (TextInput as any)[__USE_FIELDSET_PROP] = false;
