import * as React from 'react';

interface CommonAnchorRenderProps {
  className?: string;
}

interface AnchorAnchorRenderProps extends CommonAnchorRenderProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface ButtonAnchorRenderProps extends CommonAnchorRenderProps {
  as: 'button';
  role: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export type AnchorRenderProps =
  | AnchorAnchorRenderProps
  | ButtonAnchorRenderProps;

export type AnchorRenderFunction = (
  props: AnchorRenderProps,
) => React.ReactElement;

export interface AnchorProps {
  // link button props
  href?: string;
  rel?: string;
  target?: string;

  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode | AnchorRenderFunction;
}

export const Anchor = (props: AnchorProps) => {
  const {href, rel, target, disabled, children, ...otherProps} = props;

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // prevent the spacebar from triggering the :active state on the button when a button is used as an anchor
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  const handleButtonKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    // prevent the spacebar from triggering the button when a button is used as an anchor
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  const renderAnchor = (anchorProps: Omit<AnchorAnchorRenderProps, 'as'>) => {
    if (typeof children === 'function') {
      return children({...anchorProps, as: 'a'});
    }
    return <a {...props}>{children}</a>;
  };

  const renderButton = (
    buttonProps: Omit<
      ButtonAnchorRenderProps,
      'as' | 'role' | 'onKeyUp' | 'onKeyDown'
    >,
  ) => {
    const props = {
      ...buttonProps,
      role: 'link',
      onKeyDown: handleButtonKeyDown,
      onKeyUp: handleButtonKeyUp,
    };
    if (typeof children === 'function') {
      return children({...props, as: 'button'});
    }
    return <button {...buttonProps}>{children}</button>;
  };

  if (href === undefined || disabled) {
    return renderButton({disabled, ...otherProps});
  } else {
    return renderAnchor({href, rel, target, ...otherProps});
  }
};
