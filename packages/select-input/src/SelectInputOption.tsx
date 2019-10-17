import * as React from 'react';

export type SelectInputOptionProps = JSX.IntrinsicElements['option'];

export const SelectInputOption: React.FC<SelectInputOptionProps> = props => (
  <option {...props} />
);
