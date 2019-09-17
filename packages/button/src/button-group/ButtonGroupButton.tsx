import * as React from 'react';
import {ButtonProps, Button} from '../button/Button';
import {ButtonGroupContext} from './ButtonGroupContext';

// exclude `size` because it is applicable to the whole button group
// modify `variant` because the tertiary variant is not visually allowed to be in a group
type ButtonGroupButtonProps = Exclude<ButtonProps, 'size' | 'variant'> & {
  variant: 'primary' | 'secondary';
};

export const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const {size} = React.useContext(ButtonGroupContext);
  return (
    <Button
      size={size}
      className={`wp-button-group__button ${className}`}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
