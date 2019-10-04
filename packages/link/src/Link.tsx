import * as React from 'react';
import {Element} from './Link.style';

interface LinkCommonProps {
  isSubtle?: boolean;
  children?: React.ReactNode;
}

interface LinkAnchorProps extends LinkCommonProps {
  href: string;
  className?: string;
}

interface LinkButtonProps extends LinkCommonProps {
  onClick: () => void;
  className?: string;
}

export type LinkProps = LinkAnchorProps | LinkButtonProps;

export interface Link {
  (props: LinkAnchorProps): React.ReactElement;
  (props: LinkButtonProps): React.ReactElement;
}

function isAnchorProps(props: any): props is LinkAnchorProps {
  return (props as LinkAnchorProps).href !== undefined;
}

// TODO: handle space
// TODO: handle focus for third-party component???

export const Link: Link = (props: LinkProps): React.ReactElement => {
  // render an anchor
  if (isAnchorProps(props)) {
    const {...otherProps} = props;
    return <Element {...otherProps} />;
  }

  // render a button
  return <Element {...props} role="link" as="button" />;
};
