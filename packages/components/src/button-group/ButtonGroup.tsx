import * as React from 'react';
import {ButtonSize} from '../button';
import {ButtonGroupContext} from './ButtonGroupContext';
import {ButtonGroupButton} from './ButtonGroupButton';

interface ButtonGroupStatic {
  Button: typeof ButtonGroupButton;
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> & ButtonGroupStatic = ({
  size,
  className,
  children,
}) => (
  <ButtonGroupContext.Provider value={{size}}>
    <div className={`wp-button-group ${className}`} role="group">
      {children}
    </div>
  </ButtonGroupContext.Provider>
);

ButtonGroup.Button = ButtonGroupButton;
