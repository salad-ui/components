import * as React from 'react';
import classnames from 'classnames';
import {ButtonProps, Button} from '../button/Button';
import {ButtonGroupContext} from './ButtonGroupContext';
import * as styles from './ButtonGroupButton.treat';

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
            className={classnames(styles.common, className)}
            {...otherProps}
        >
            {children}
        </Button>
    );
};
