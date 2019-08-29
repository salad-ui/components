import * as React from 'react';
import styled from 'styled-components';

import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';
import SiteFooter from '../../components/SiteFooter';
import SiteHeaderNav from '../../components/SiteHeaderNav';
import '../../styles/variables.css';
import '../../styles/global.css';

const Layout: React.FC = props => {
  const {children, title} = props;

  return (
    <>
      <Wrapper>
        <SEO title={title} />
        <SiteHeaderNav />
        <FadeIn>
          <Content>{children}</Content>
        </FadeIn>
        <SiteFooter />
      </Wrapper>
    </>
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
