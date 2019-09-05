import * as React from 'react';
import styled from 'styled-components';

const Example: React.FC = props => {
  const {children} = props;
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 1em 0;
`;

export default Example;
