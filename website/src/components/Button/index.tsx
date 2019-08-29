import * as React from 'react';
import classnames from 'classnames';
import {ButtonBase, ButtonExternalLink, ButtonLink} from './Button.styles';

export const Button: React.FC<any> = (props = Button.defaultProps as any) => {
  const {className, href, isBlock, to, ...additionalProps} = props;
  const classes = classnames(className, isBlock && 'is-block');

  const Component = to ? ButtonLink : href ? ButtonExternalLink : ButtonBase;

  return (
    <Component {...additionalProps} className={classes} href={href} to={to} />
  );
};

Button.defaultProps = {
  isBlock: false,
  variant: 'default',
  size: 'md',
};

export default Button;
