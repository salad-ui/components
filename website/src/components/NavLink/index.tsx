import * as React from 'react';
import Link, {LinkProps} from '../Link';

const NavLink: React.FC<LinkProps> = props => {
    return <Link {...props} partiallyActive={true} />;
};

export default NavLink;
