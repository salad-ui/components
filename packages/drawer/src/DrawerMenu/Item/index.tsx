import * as React from 'react';
import {
  ButtonProps as A11yButtonProps,
  Anchor as A11yAnchor,
  Button as A11yButton,
  useFocusGroupItem,
} from '@salad-ui/a11y';
import {Context} from '../Context';
import {Wrapper, BeforeWrapper, AfterWrapper} from './index.styles';

interface CommonProps {
  /**
   * Content displayed before the item children
   */
  before?: React.ReactNode;

  /**
   * Content displayed after the item children
   */
  after?: React.ReactNode;

  role?: 'button' | 'link';

  isActive?: boolean;

  children?: React.ReactNode;
}

export type DrawerMenuItemProps = A11yButtonProps & CommonProps;

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  role = 'link',
  isActive,
  before,
  after,
  children,
  ...otherProps
}) => {
  const {variant} = React.useContext(Context);
  const focusGroupItemProps = useFocusGroupItem();

  const extraProps = {
    variant,
    isActive,
    ...(variant === 'item' ? focusGroupItemProps : {}),
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
        {renderProps => (
          <Wrapper {...renderProps} {...extraProps}>
            {content}
          </Wrapper>
        )}
      </A11yAnchor>
    );
  } else {
    return (
      <A11yButton {...otherProps}>
        {renderProps => (
          <Wrapper {...renderProps} {...extraProps}>
            {content}
          </Wrapper>
        )}
      </A11yButton>
    );
  }
};
