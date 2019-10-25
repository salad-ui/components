import * as React from 'react';
import {
  useFocusGroupItem,
  UseFocusGroupItemOptions,
  UseFocusGroupItemResult,
} from './useFocusGroupItem';

export interface FocusGroupItemRenderProps extends UseFocusGroupItemResult {}

export interface FocusGroupItemProps extends UseFocusGroupItemOptions {
  children: (props: FocusGroupItemRenderProps) => React.ReactElement;
}

export const FocusGroupItem: React.FC<FocusGroupItemProps> = ({
  disabled,
  children,
}) => {
  const renderProps = useFocusGroupItem({disabled});
  return children(renderProps);
};
