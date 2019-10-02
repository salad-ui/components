import * as React from 'react';
import {Label, Help} from './Field.style';

export interface FieldProps {
  id: string;
  label: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  children?: React.ReactNode;
}

// TODO: add aria-describedby to inputs describing `help`

export const Field = ({id, label, help, error, children}: FieldProps) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {(help || error) && (
        <Help isError={Boolean(error)}>{error ? error : help}</Help>
      )}
    </>
  );
};
