import * as React from 'react';
import {SelectInputOption} from './SelectInputOption';
import {Wrapper, Select, Arrow} from './SelectInput.styles';

export interface SelectInputStatic {
  Option: typeof SelectInputOption;
}

export interface SelectInputProps {
  isCompact?: boolean;
  isFullWidth?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SelectInput: React.FC<SelectInputProps> & SelectInputStatic = ({
  isInvalid,
  isRequired,
  isDisabled,
  isFullWidth,
  className,
  children,
  ...otherProps
}) => {
  return (
    <Wrapper isFullWidth={isFullWidth} className={className}>
      <Select
        {...otherProps}
        isFullWidth={isFullWidth}
        aria-invalid={isInvalid}
        aria-required={isRequired}
        disabled={isDisabled}
      >
        {children}
      </Select>
      <Arrow color="onSurface.main" aria-hidden={true} />
    </Wrapper>
  );
};

SelectInput.Option = SelectInputOption;
