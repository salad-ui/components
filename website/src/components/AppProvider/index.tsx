import * as React from 'react';
import '@design-system-example/components/index.scss';

const AppProvider: React.FC = props => {
  const {children} = props;
  return <>{children}</>;
};

export default AppProvider;
