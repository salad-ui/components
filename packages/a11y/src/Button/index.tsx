import * as React from 'react';

interface CommonButtonRenderProps {
  className?: string;
}

interface AnchorButtonRenderProps extends CommonButtonRenderProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  role: string;
  onClick?: (event: React.MouseEvent) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
}

interface ButtonButtonRenderProps extends CommonButtonRenderProps {
  as: 'button';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export type ButtonRenderProps =
  | AnchorButtonRenderProps
  | ButtonButtonRenderProps;

export type ButtonRenderFunction = (
  props: ButtonRenderProps,
) => React.ReactElement;

export interface ButtonProps {
  // link button props
  href?: string;
  rel?: string;
  target?: string;

  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode | ButtonRenderFunction;
}

export const Button = (props: ButtonProps) => {
  const {href, rel, target, disabled, children, ...otherProps} = props;

  const handleAnchorKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    // make the space key trigger the anchor to have the same behaviour as a button
    // note: anchors will still be missing the :active state when the space key is used - this can't be faked
    if (event.key === ' ') {
      event.currentTarget.click();
    }
  };

  const renderAnchor = (
    anchorProps: Omit<AnchorButtonRenderProps, 'as' | 'role' | 'onKeyUp'>,
  ) => {
    const props = {
      ...anchorProps,
      role: 'button',
      onKeyUp: handleAnchorKeyUp,
    };
    if (typeof children === 'function') {
      return children({...props, as: 'a'});
    }
    return <a {...props}>{children}</a>;
  };

  const renderButton = (buttonProps: Omit<ButtonButtonRenderProps, 'as'>) => {
    if (typeof children === 'function') {
      return children({...buttonProps, as: 'button'});
    }
    return <button {...buttonProps}>{children}</button>;
  };

  if (href === undefined || disabled) {
    return renderButton({disabled, ...otherProps});
  } else {
    return renderAnchor({href, rel, target, ...otherProps});
  }
};
