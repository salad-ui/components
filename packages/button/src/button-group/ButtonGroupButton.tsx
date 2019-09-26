import * as React from 'react';
import {ButtonProps} from '../button/Button';
import {ButtonGroupContext} from './ButtonGroupContext';
import {Wrapper} from './ButtonGroupButton.style';

// exclude `size` because it is applicable to the whole button group
// modify `variant` because the tertiary variant is not visually allowed to be in a group
type ButtonGroupButtonProps = Exclude<ButtonProps, 'size' | 'variant'> & {
    variant: 'primary' | 'secondary';
};

export const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = ({
    children,
    ...otherProps
}) => {
    const {size} = React.useContext(ButtonGroupContext);
    return (
        <Wrapper size={size} {...otherProps}>
            {children}
        </Wrapper>
    );
};
