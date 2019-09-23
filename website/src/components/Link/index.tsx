import * as React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import styled from 'styled-components';

export interface LinkProps {
    children: React.ReactNode;
    href?: string;
    target?: string;
    partiallyActive?: boolean;
    rel?: string;
    to: string;
}

const Link: React.FC<LinkProps> = props => {
    return <StyledLink {...props} activeClassName="is-active" />;
};

const StyledLink = styled(GatsbyLink)`
  &.is-active {
    font-weight: bold;
  }
`;

export default Link;
