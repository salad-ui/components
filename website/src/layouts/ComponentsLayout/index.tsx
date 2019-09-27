import * as React from 'react';
import styled from 'styled-components';

import {
  AppProvider,
  Container,
  PageContainer,
  FadeIn,
  SiteFooter,
  SiteHeaderNav,
  SEO,
} from '../../components';
import Navigation from './Navigation';
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
          <Container>
            <Grid>
              <Navigation />
              <Content>
                <PageContainer>
                  <h1>{title}</h1>
                  {children}
                </PageContainer>
              </Content>
            </Grid>
          </Container>
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
  grid-column: 2 / span 3;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

export default Layout;
