import * as React from 'react';
import {Input} from './TextInput.styles';
// import {__USE_FIELDSET_PROP} from '@salad-ui/field';

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface TextInputProps {
  onFocus?: () => void;
  onBlur?: () => void;

  /** The change handler. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** The value */
  value?: string;

  /** The default value */
  defaultValue?: string;

  /** Whether the value is invalid. */
  isInvalid?: boolean;

  /** Whether the value is required. */
  isRequired?: boolean;

  /** Whether the value is disabled. */
  isDisabled?: boolean;

  /** Whether to use a more compact input. */
  isCompact?: boolean;

  /** Whether the input should stretch the width of the container. */
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
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  isInvalid,
  isRequired,
  isDisabled,
  ...otherProps
}) => {
  return (
    <Input
      {...otherProps}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      disabled={isDisabled}
    />
  );
};
