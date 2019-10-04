import * as React from 'react';
import {ButtonVariant} from './types';
import {Element, Before, After} from './Button.style';

interface ButtonCommonProps {
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
   * Renders a compact button.
   */
  isCompact?: boolean;

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

interface ButtonAnchorProps extends ButtonCommonProps {
  href: string;
  className?: string;
}

interface ButtonButtonProps extends ButtonCommonProps {
  onClick: () => void;
  className?: string;
}

export type ButtonProps = ButtonAnchorProps | ButtonButtonProps;

export interface Button {
  (props: ButtonAnchorProps): React.ReactElement;
  (props: ButtonButtonProps): React.ReactElement;
}

function isAnchorProps(props: any): props is ButtonAnchorProps {
  return (props as ButtonAnchorProps).href !== undefined;
}

// TODO: handle space
// TODO: handle focus for third-party component???

export const Button: Button = (props: ButtonProps): React.ReactElement => {
  const {before, after, children, ...otherProps} = props;

  const content = (
    <>
      {before && <Before>{before}</Before>}
      {children}
      {after && <After>{after}</After>}
    </>
  );

  // render an anchor
  if (isAnchorProps(otherProps)) {
    const {...anchorProps} = props;
    return (
      <Element {...anchorProps} role="button" as="a">
        {content}
      </Element>
    );
  }

  // render a button
  const {isDisabled, ...buttonProps} = otherProps;
  return (
    <Element {...buttonProps} disabled={isDisabled} as="button">
      {content}
    </Element>
  );
};

// Button.defaultProps = {
//   variant: 'secondary',
//   isDisabled: false,
// };
