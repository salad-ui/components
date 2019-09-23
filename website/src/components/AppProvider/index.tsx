import * as React from 'react';
import '@carrot-components/button/index.scss';

const AppProvider: React.FC = props => {
    const {children} = props;
    return <>{children}</>;
};

export default AppProvider;
