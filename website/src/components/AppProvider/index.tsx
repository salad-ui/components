import * as React from 'react';
import '@carrot-components/components/index.scss';

const AppProvider: React.FC = props => {
  const {children} = props;
  return <>{children}</>;
};

export default AppProvider;
