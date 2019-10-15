import * as React from 'react';
import {Wrapper, BeforeWrapper, AfterWrapper} from './index.style';
import {
  ButtonProps as A11yButtonProps,
  Anchor as A11yAnchor,
  Button as A11yButton,
} from '@salad-ui/a11y';

interface CommonAppBarItemProps {
  /**
   * Content displayed before the item children
   */
  before?: React.ReactNode;

  /**
   * Content displayed after the item children
   */
  after?: React.ReactNode;

  role?: 'button' | 'link';

  children?: React.ReactNode;
}

export type AppBarItemProps = A11yButtonProps & CommonAppBarItemProps;

export const DrawerItem: React.FC<AppBarItemProps> = ({
  role = 'link',
  before,
  after,
  children,
  ...otherProps
}) => {
  const content = (
    <>
      {before && <BeforeWrapper>{before}</BeforeWrapper>}
      {children}
      {after && <AfterWrapper>{after}</AfterWrapper>}
    </>
  );

  if (role === 'link') {
    return (
      <A11yAnchor {...otherProps}>
        {renderProps => <Wrapper {...renderProps}>{content}</Wrapper>}
      </A11yAnchor>
    );
  } else {
    return (
      <A11yButton {...otherProps}>
        {renderProps => <Wrapper {...renderProps}>{content}</Wrapper>}
      </A11yButton>
    );
  }
};
