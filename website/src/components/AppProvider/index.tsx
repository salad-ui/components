import * as React from 'react';
import {Theme} from '@salad-ui/theme';

export const AppProvider: React.FC = props => {
  const {children} = props;
  return (
    <Theme>
      <>{children}</>
    </Theme>
  );
};
