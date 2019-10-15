import * as React from 'react';

export const useToggle = (
  initialState: boolean = true,
): [boolean, () => void] => {
  const [isOn, setOn] = React.useState(initialState);
  return [isOn, () => setOn(isOn => !isOn)];
};
