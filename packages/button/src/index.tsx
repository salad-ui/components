import * as React from 'react';
// import classnames from 'classnames';

export interface ButtonProps {
  href?: string;
  target?: string;
  isPrimary?: boolean;
  isLarge?: boolean;
  isSmall?: boolean;
  isTertiary?: boolean;
  isToggled?: boolean;
  isBusy?: boolean;
  isDefault?: boolean;
  isLink?: boolean;
  isDestructive?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

/* eslint-disable-next-line react/display-name */
export const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    href,
    target,
    // isPrimary,
    // isLarge,
    // isSmall,
    // isTertiary,
    // isToggled,
    // isBusy,
    // isDefault,
    // isLink,
    // isDestructive,
    // className,
    disabled,
    children,
    ...additionalProps
  } = props;

  // const classes = classnames( 'components-button', className, {
  // 	'is-button': isDefault || isPrimary || isLarge || isSmall,
  // 	'is-default': isDefault || ( ! isPrimary && ( isLarge || isSmall ) ),
  // 	'is-primary': isPrimary,
  // 	'is-large': isLarge,
  // 	'is-small': isSmall,
  // 	'is-tertiary': isTertiary,
  // 	'is-toggled': isToggled,
  // 	'is-busy': isBusy,
  // 	'is-link': isLink,
  // 	'is-destructive': isDestructive,
  // } );
  const classes = '';

  const tag = href !== undefined && !disabled ? 'a' : 'button';

  if (tag === 'a') {
    return (
      <a
        {...{href, target}}
        {...additionalProps}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        {...{type: 'button', disabled}}
        {...additionalProps}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
});
