import * as React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

export const Logo: React.FC = () => {
  return (
    <LogoLink to="/">
      <IconWrapper>
        <span role="img" aria-label="salad bowl emoji">
          🥗
        </span>
      </IconWrapper>
      <Title>salad-ui</Title>
    </LogoLink>
  );
};

const LogoLink = styled(Link)`
  align-items: center;
  color: black;
  display: flex;
  margin-right: 40px;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
`;

const Title = styled.span`
  font-weight: bold;
`;

export default Logo;
