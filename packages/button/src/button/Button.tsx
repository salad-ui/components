import * as React from 'react';
import {ButtonVariant} from './types';
import {
  ButtonProps as A11yButtonProps,
  Button as A11yButton,
} from '@salad-ui/a11y';
import {Element, Before, After} from './Button.styles';

interface CommonButtonProps {
  /**
   * Content displayed before the button children
   */
  before?: React.ReactNode;

  /**
   * Content displayed after the button children
   */
  after?: React.ReactNode;

  /**
   * The button variant to display.
   */
  variant: ButtonVariant;

  /**
   * Renders a compact button.
   */
  isCompact?: boolean;

  /**
   * Renders a full-width button.
   */
  isFullWidth?: boolean;

  /**
   * Renders a destructive button.
   */
  isDestructive?: boolean;

  /**
   * Renders a disabled state.
   */
  isDisabled?: boolean;

  children?: React.ReactNode;
}

export type ButtonProps = A11yButtonProps & CommonButtonProps;

export const Button: React.FC<ButtonProps> = props => {
  const {
    before,
    after,
    variant,
    isCompact,
    isFullWidth,
    isDestructive,
    isDisabled,
    children,
    ...otherProps
  } = props;

  const styleProps = {
    variant,
    isCompact,
    isFullWidth,
    isDestructive,
  };

  const content = (
    <>
      {before && <Before>{before}</Before>}
      {children}
      {after && <After>{after}</After>}
    </>
  );

  return (
    <A11yButton {...otherProps} disabled={isDisabled}>
      {renderProps => (
        <Element {...renderProps} {...styleProps}>
          {content}
        </Element>
      )}
    </A11yButton>
  );
};
