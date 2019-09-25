import * as React from 'react';
import '@salad-ui/button/index.scss';

const AppProvider: React.FC = props => {
    const {children} = props;
    return <>{children}</>;
};

export default AppProvider;
