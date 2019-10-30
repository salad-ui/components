import * as React from 'react';
import {MarginProps} from '@salad-ui/spacing';
import {ButtonGroupButton} from './ButtonGroupButton';
import {ButtonGroupContext} from './ButtonGroupContext';
import {Wrapper} from './ButtonGroup.styles';

export interface ButtonGroupStatic {
  Button: typeof ButtonGroupButton;
}

export interface ButtonGroupProps extends MarginProps {
  isCompact?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> & ButtonGroupStatic = ({
  isCompact,
  children,
  ...otherProps
}) => {
  const context = React.useMemo(() => ({isCompact}), [isCompact]);
  return (
    <ButtonGroupContext.Provider value={context}>
      <Wrapper {...otherProps}>{children}</Wrapper>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.Button = ButtonGroupButton;
