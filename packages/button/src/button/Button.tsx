import * as React from 'react';
import classnames from 'classnames';
import * as typography from '@carrot-components/typography';
import * as spacing from '@carrot-components/spacing';
import {ButtonVariant, ButtonSize} from './types';
import * as styles from './Button.treat';

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
        className,
        children,
        ...otherProps
    } = props;

    const useAnchorElement = href !== undefined && !isDisabled;

    const classes = classnames(
        spacing.usePaddingLeft('sm'),
        typography.useButton({size}),
        styles.common,
        (variant === 'primary' || variant === 'secondary') &&
      styles.variants[variant],
        variant === 'tertiary' && typography.useLink(),
        styles.sizes[size],
        {[styles.busy]: isBusy},
        className,
    );

    const content = (
    <>
      {before && (
          <span className={spacing.useMarginRight('xxs')}>{before}</span>
      )}
      {children}
      {after && <span className={spacing.useMarginLeft('xxs')}>{after}</span>}
    </>
    );

    if (useAnchorElement) {
        return (
            <a
                {...otherProps}
                href={href}
                target={target}
                className={classes}
                ref={ref as React.Ref<HTMLAnchorElement>}
            >
                {content}
            </a>
        );
    } else {
        return (
            <button
                {...otherProps}
                type="button"
                disabled={isDisabled}
                className={classes}
                ref={ref as React.Ref<HTMLButtonElement>}
            >
                {content}
            </button>
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
