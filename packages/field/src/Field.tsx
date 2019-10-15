import * as React from 'react';
import {useUIDSeed} from 'react-uid';
import {Wrapper, Label, Message} from './Field.style';

/**
 * Hacky property used to determine if an input should be rendered inside a
 * fieldset or regular label for accessibility reasons e.g. appicable for RadioGroup and CheckboxGroup
 * @private
 */
export const __USE_FIELDSET_PROP = '__useFieldset';

export interface BasicInputProps {
  id?: string;
  required?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface CustomInputProps {
  id?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface FieldProps {
  /** The field label. */
  label: React.ReactNode;
  /** A message to assist the user in completing the field. */
  help?: React.ReactNode;
  /** An error message describing why the field is invalid and how to fix it. */
  error?: React.ReactNode;
  /** Whether the field is required. */
  isRequired?: boolean;
  className?: string;
  children?: React.ReactElement<BasicInputProps | CustomInputProps>;
}

export const Field = ({
  label,
  help,
  error,
  isRequired,
  children,
  ...otherProps
}: FieldProps) => {
  const seed = useUIDSeed();
  const inputId = seed('input');
  const labelID = seed('label');
  const descriptionID = seed('description');

  // ensure there is a single input element provided
  const child = React.Children.only(children);
  if (!React.isValidElement<BasicInputProps | CustomInputProps>(child)) {
    throw new Error('<Field/> expects an input.');
  }

  // pass props down to the input - filter props based child on type to avoid react warnings
  const inputProps =
    typeof child.type === 'string'
      ? {
          id: inputId,
          required: isRequired,
          'aria-labelledby': labelID,
          'aria-describedby': descriptionID,
        }
      : {
          id: inputId,
          isRequired: isRequired,
          isInvalid: Boolean(error),
          'aria-labelledby': labelID,
          'aria-describedby': descriptionID,
        };
  const inputWithProps = React.cloneElement(child, {
    ...child.props,
    ...inputProps,
  });

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // decide whether we need to display a fieldset (for grouped inputs like a RadioGroup)
  const useFieldset =
    typeof child.type !== 'string' &&
    (child.type as any)[__USE_FIELDSET_PROP] === true;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <Wrapper as={useFieldset ? 'fieldset' : 'div'} {...otherProps}>
      <Label
        isError={Boolean(error)}
        id={labelID}
        htmlFor={inputId}
        as={useFieldset ? 'legend' : 'label'}
      >
        {label}
      </Label>
      {inputWithProps}
      {(help || error) && (
        <Message id={descriptionID} aria-live="polite" isError={Boolean(error)}>
          {error ? error : help}
        </Message>
      )}
    </Wrapper>
  );
};
