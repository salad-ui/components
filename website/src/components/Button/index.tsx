import * as React from 'react';
import classnames from 'classnames';

import {ButtonProps} from './Button.types';
import {ButtonBase, ButtonExternalLink, ButtonLink} from './Button.styles';

const defaultProps = {
  isBlock: false,
  variant: 'default',
  size: 'md',
};

export const Button: React.FC<ButtonProps> = props => {
  const mergedProps = {...defaultProps, ...props};

  const {className, href, isBlock, to, ...additionalProps} = mergedProps;
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

export default Button;
