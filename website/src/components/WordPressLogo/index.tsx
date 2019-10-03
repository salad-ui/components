import * as React from 'react';
import styled from 'styled-components';

export interface LogoProps {
  width?: number;
}

export const Logo: React.FC<LogoProps> = props => {
  const {width = 20} = props;
  const style = {width};

  return (
    <IconWrapper style={style}>
      <WordPressLogoIcon />
    </IconWrapper>
  );
};

export const WordPressLogoIcon: React.FC = () => {
  return (
    <span role="img" aria-label="salad bowl emoji">
      🥗
    </span>
  );
};

const IconWrapper = styled.span`
  display: block;

  svg {
    display: block;
    width: 100%;
  }
`;

export default Logo;
