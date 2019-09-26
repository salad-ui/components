import * as React from 'react';
import {ButtonSize} from '../button';
import {ButtonGroupContext} from './ButtonGroupContext';
import {ButtonGroupButton} from './ButtonGroupButton';
import {Wrapper} from './ButtonGroup.style';

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
    children,
    ...otherProps
}) => (
    <ButtonGroupContext.Provider value={{size}}>
        <Wrapper {...otherProps} role="group">
            {children}
        </Wrapper>
    </ButtonGroupContext.Provider>
);

ButtonGroup.Button = ButtonGroupButton;
