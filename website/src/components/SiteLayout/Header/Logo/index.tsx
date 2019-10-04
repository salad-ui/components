import * as React from 'react';
import {Link, Icon, Text} from './index.style';
export const Logo: React.FC = () => {
  return (
    <>
      <Link to="/">
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        {/* it is, the linting just can't tell */}
        <Icon role="img" aria-label="salad bowl emoji">
          🥗
        </Icon>
        {/* eslint-enable jsx-a11y/accessible-emoji */} <Text>salad-ui</Text>
      </Link>
    </>
  );
};
