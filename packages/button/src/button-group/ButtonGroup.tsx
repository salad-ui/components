import * as React from 'react';
import classnames from 'classnames';
import {ButtonSize} from '../button';
import {ButtonGroupContext} from './ButtonGroupContext';
import {ButtonGroupButton} from './ButtonGroupButton';
import * as styles from './ButtonGroup.treat';

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
        <div className={classnames(styles.common, className)} role="group">
            {children}
        </div>
    </ButtonGroupContext.Provider>
);

ButtonGroup.Button = ButtonGroupButton;
