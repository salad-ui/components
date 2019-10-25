import * as React from 'react';
import {ButtonProps, Button} from '../button';
import {ButtonGroupContext} from './ButtonGroupContext';

export type ButtonGroupButtonProps = Omit<
  ButtonProps,
  'isCompact' | 'isFullWidth'
>;

export const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = ({
  children,
  ...otherProps
}) => {
  const sharedProps = React.useContext(ButtonGroupContext);
  return (
    <Button {...sharedProps} {...otherProps}>
      {children}
    </Button>
  );
};
