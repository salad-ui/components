import * as React from 'react';
import styled from 'styled-components';

import {
  AppProvider,
  FadeIn,
  SiteFooter,
  SiteHeaderNav,
  SEO,
} from '../../components';
import {getTitle} from '../utils';
import '../../styles/variables.css';
import '../../styles/global.css';

const Layout: React.FC = props => {
  const {children} = props;
  const title = getTitle(props);

  return (
    <AppProvider>
      <Wrapper>
        <SEO title={title} />
        <SiteHeaderNav />
        <FadeIn>
          <Content>{children}</Content>
        </FadeIn>
        <SiteFooter />
      </Wrapper>
    </AppProvider>
  );
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
`;

export default Layout;
