import * as React from 'react';
import {ButtonVariant} from './types';
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
  variant: ButtonVariant;

  /**
   * Renders a disabled state.
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

export const Button = (props: ButtonProps) => {
  const {
    before,
    after,
    href,
    target,
    isDisabled = false,
    children,
    ...otherProps
  } = props;

  const useAnchorWrapper = href !== undefined && !isDisabled;

  const content = (
    <>
      {before && <Before>{before}</Before>}
      {children}
      {after && <After>{after}</After>}
    </>
  );

  if (useAnchorWrapper) {
    return (
      <AnchorWrapper {...otherProps} href={href} target={target}>
        {content}
      </AnchorWrapper>
    );
  } else {
    return (
      <ButtonWrapper {...otherProps} type="button" disabled={isDisabled}>
        {content}
      </ButtonWrapper>
    );
  }
};

Button.defaultProps = {
  variant: 'secondary',
  isDisabled: false,
};
