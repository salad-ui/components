import * as React from 'react';
import { DrawerItemVariant } from './types';
import { Wrapper, BeforeWrapper, AfterWrapper } from './DrawerItem.style';
import {
  ButtonProps as A11yButtonProps, 
  Anchor as A11yAnchor,
  Button as A11yButton
} from '@salad-ui/a11y';

interface CommonDrawerItemProps {

  /**
   * Content displayed before the item children
   */
  before?: React.ReactNode;

  /**
   * Content displayed after the item children
   */
  after?: React.ReactNode;

  role?: 'button' | 'link';

  /**
   * The button variant to display.
   */
  variant: DrawerItemVariant;

  isActive?: boolean;

  children?: React.ReactNode;
}

export type DrawerItemProps = A11yButtonProps & CommonDrawerItemProps;

export const DrawerItem: React.FC<DrawerItemProps> = ({role = 'link', variant, isActive, before, after, children, ...otherProps}) => {
  
  const styleProps = {
    variant,
    isActive
  };

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
        {(renderProps) => (
          <Wrapper {...renderProps} {...styleProps}>
            {content}
          </Wrapper>
        )}
      </A11yAnchor>
    );
  } else {
    return (
      <A11yButton {...otherProps}>
        {(renderProps) => (
          <Wrapper {...renderProps} {...styleProps}>
            {content}
          </Wrapper>
        )}
      </A11yButton>
    )
  }
};
