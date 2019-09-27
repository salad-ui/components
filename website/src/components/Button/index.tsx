import * as React from 'react';
import classnames from 'classnames';

import {ButtonSize, ButtonVariant} from './Button.types';
import {ButtonBase, ButtonExternalLink, ButtonLink} from './Button.styles';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  isBlock: boolean;
  href?: string;
  size: ButtonSize;
  rel?: string;
  target?: string;
  to?: string;
  variant: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
  const {className, href, isBlock, to, ...additionalProps} = props;
  const classes = classnames(className, isBlock && 'is-block');

  const componentProps = {...additionalProps, className: classes};

  if (to) {
    return <ButtonLink {...componentProps} to={to} />;
  }
  if (href) {
    return <ButtonExternalLink {...componentProps} href={href} />;
  }

  return <ButtonBase {...componentProps} />;
};

Button.defaultProps = {
  isBlock: false,
  variant: 'default',
  size: 'md',
};

export default Button;
