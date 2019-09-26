import * as React from 'react';

const AppProvider: React.FC = props => {
    const {children} = props;
    return <>{children}</>;
};

export default AppProvider;
