import * as React from 'react';
import {
  ButtonProps as A11yButtonProps,
  Anchor as A11yAnchor,
  Button as A11yButton,
  useFocusGroupItem,
} from '@salad-ui/a11y';
import {Wrapper} from './Tab.styles';

interface CommonProps {
  role?: 'button' | 'link';
  isActive?: boolean;
  children?: React.ReactNode;
}

export type TabProps = A11yButtonProps & CommonProps;

export const Tab: React.FC<TabProps> = ({
  role = 'link',
  isActive,
  children,
  ...otherProps
}) => {
  const focusGroupItemProps = useFocusGroupItem();

  const extraProps = {
    isActive,
  };

  if (role === 'link') {
    return (
      <A11yAnchor {...otherProps}>
        {renderProps => (
          <Wrapper {...focusGroupItemProps} {...renderProps} {...extraProps}>
            {children}
          </Wrapper>
        )}
      </A11yAnchor>
    );
  } else {
    return (
      <A11yButton {...otherProps}>
        {renderProps => (
          <Wrapper {...focusGroupItemProps} {...renderProps} {...extraProps}>
            {children}
          </Wrapper>
        )}
      </A11yButton>
    );
  }
};
