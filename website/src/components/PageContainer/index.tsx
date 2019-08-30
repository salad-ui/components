import * as React from 'react';
import styled from 'styled-components';

import Typography from '../Typography';

export const PageContainer: React.FC = props => {
  const {children} = props;

  return (
    <Content>
      <Typography>{children}</Typography>
    </Content>
  );
};

const Content = styled.div`
  max-width: 720px;
  margin: 4em 0 10em;
  width: 100%;
`;

export default PageContainer;
