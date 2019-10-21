import * as React from 'react';
import {useFocusGroupItem} from './useFocusGroupItem';

export interface FocusGroupItemRenderProps {
  ref: React.RefObject<any>;
  disabled?: boolean;
  onKeyDown: (event: React.KeyboardEvent<any>) => void;
}

export interface FocusGroupItemProps {
  disabled?: boolean;
  children: (props: FocusGroupItemRenderProps) => React.ReactElement;
}

export const FocusGroupItem: React.FC<FocusGroupItemProps> = ({
  disabled,
  children,
}) => {
  const renderProps = useFocusGroupItem({disabled});
  return children(renderProps);
};
