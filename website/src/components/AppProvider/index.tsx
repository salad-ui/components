import * as React from 'react';
import {wordpress} from '@design-system-example/theme';
import {ThemeProvider} from 'styled-components';

const AppProvider: React.FC = props => {
  const {children} = props;
  return (
    <ThemeProvider theme={wordpress}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default AppProvider;
