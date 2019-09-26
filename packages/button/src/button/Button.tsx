import * as React from 'react';
import {ButtonVariant, ButtonSize} from './types';
import {Before, After, AnchorWrapper, ButtonWrapper} from './Button.style';

export interface ButtonProps {
    /**
   * Content displayed before the button children
   */
    before?: React.ReactNode;

    /**
   * Content displayed after the button children
   */
    after?: React.ReactNode;

    /**
   * The variant to use.
   */
    variant?: ButtonVariant;
    /**
   * The size of the button.
   */
    size?: ButtonSize;
    /**
   * Renders a busy state.
   */
    isBusy?: boolean;
    /**
   * Renders a busy state.
   */
    isDisabled?: boolean;
    /**
   * Renders an anchor element.
   */
    href?: string;
    /**
   * Adjusts the anchor element target.
   */
    target?: string;
    /**
   * Callback when clicked.
   */
    onClick?: () => void;
    /**
   * Custom component className.
   */
    className?: string;
    children: React.ReactNode;
}

/* eslint-disable-next-line react/display-name */
export const Button = React.forwardRef<
HTMLAnchorElement | HTMLButtonElement,
ButtonProps
>((props, ref) => {
    const {
        before,
        after,
        variant = 'secondary',
        size = 'medium',
        href,
        target,
        isBusy = false,
        isDisabled = false,
        children,
        ...otherProps
    } = props;

    const useAnchorWrapper = href !== undefined && !isDisabled;

    const commonProps = {
        size,
        variant,
        isBusy,
    };

    const content = (
    <>
      {before && <Before>{before}</Before>}
      {children}
      {after && <After>{after}</After>}
    </>
    );

    if (useAnchorWrapper) {
        return (
            <AnchorWrapper
                {...otherProps}
                {...commonProps}
                href={href}
                target={target}
                ref={ref as React.Ref<HTMLAnchorElement>}
            >
                {content}
            </AnchorWrapper>
        );
    } else {
        return (
            <ButtonWrapper
                {...otherProps}
                {...commonProps}
                type="button"
                disabled={isDisabled}
                ref={ref as React.Ref<HTMLButtonElement>}
            >
                {content}
            </ButtonWrapper>
        );
    }
});

/*
  Having to duplicate defaults for docs since typings fail when using forwardRef()
  @see https://github.com/microsoft/TypeScript/issues/27425#issuecomment-473848082
*/
Button.defaultProps = {
    variant: 'secondary',
    size: 'medium',
    isBusy: false,
    isDisabled: false,
};
