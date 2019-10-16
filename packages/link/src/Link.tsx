import * as React from 'react';
import {Element} from './Link.styles';
import {
  AnchorProps as A11yAnchorProps,
  Anchor as A11yAnchor,
} from '@salad-ui/a11y';

interface CommonLinkProps {
  isSubtle?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export type LinkProps = A11yAnchorProps & CommonLinkProps;

export const Link: React.FC<LinkProps> = ({
  isSubtle,
  children,
  ...otherProps
}): React.ReactElement => {
  const styleProps = {
    isSubtle,
  };

  return (
    <A11yAnchor {...otherProps}>
      {renderProps => (
        <Element {...renderProps} {...styleProps}>
          {children}
        </Element>
      )}
    </A11yAnchor>
  );
};
