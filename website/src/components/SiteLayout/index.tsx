import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import Helmet from 'react-helmet';
import {Theme} from '@salad-ui/theme';
import {Header} from './Header';
import {Footer} from './Footer';
import {components} from './components';
import {
  GlobalStyle,
  Wrapper,
  BodyWrapper,
  SidebarWrapper,
  ContentWrapper,
} from './index.style';

export interface SiteLayoutProps {
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({sidebar, children}) => {
  return (
    <Theme>
      <>
        <GlobalStyle />
        <Helmet
          defaultTitle="A Design System for WordPress admin · salad-ui"
          titleTemplate="%s · salad-ui"
        />
        <MDXProvider components={components}>
          <Wrapper>
            <Header />
            <BodyWrapper>
              {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
              <ContentWrapper isFullWidth={!sidebar}>{children}</ContentWrapper>
            </BodyWrapper>
            <Footer />
          </Wrapper>
        </MDXProvider>
      </>
    </Theme>
  );
};
