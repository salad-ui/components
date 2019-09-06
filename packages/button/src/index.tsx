import * as React from 'react';
import {StyledAnchor, StyledButton} from './index.style';
import {ButtonVariant, ButtonSize} from './types';

export interface ButtonProps {
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
    variant = 'secondary',
    size = 'md',
    href,
    target,
    isBusy = false,
    isDisabled = false,
    children,
    ...otherProps
  } = props;

  const useAnchorElement = href !== undefined && !isDisabled;

  if (useAnchorElement) {
    return (
      <StyledAnchor
        variant={variant}
        size={size}
        isBusy={isBusy}
        href={href}
        target={target}
        {...otherProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </StyledAnchor>
    );
  } else {
    return (
      <StyledButton
        variant={variant}
        size={size}
        isBusy={isBusy}
        type="button"
        disabled={isDisabled}
        {...otherProps}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </StyledButton>
    );
  }
});

/*
  Having to duplicate defaults for docs since typings fail when using forwardRef()
  @see https://github.com/microsoft/TypeScript/issues/27425#issuecomment-473848082
*/
Button.defaultProps = {
  variant: 'secondary',
  size: 'md',
  isBusy: false,
  isDisabled: false,
};
