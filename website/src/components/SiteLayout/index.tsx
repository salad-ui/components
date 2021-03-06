import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import Helmet from 'react-helmet';
import {ThemeProvider} from '@salad-ui/theme';
import {Header} from './Header';
import {Footer} from './Footer';
import {components} from './mdx/components';
import {CodeScope, CodeContext} from './mdx/Code';
import {
  GlobalStyle,
  Wrapper,
  BodyWrapper,
  SidebarWrapper,
  ContentWrapper,
} from './index.styles';

export interface SiteLayoutProps {
  gatsby?: {scope?: CodeScope};
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = props => {
  const {gatsby: {scope = {}} = {}, sidebar, children} = props;
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <Helmet
          defaultTitle="A Design System for WordPress admin · salad-ui"
          titleTemplate="%s · salad-ui"
        />
        <CodeContext.Provider value={scope}>
          <MDXProvider components={components}>
            <Wrapper>
              <Header />
              <BodyWrapper>
                {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
                <ContentWrapper>{children}</ContentWrapper>
              </BodyWrapper>
              <Footer />
            </Wrapper>
          </MDXProvider>
        </CodeContext.Provider>
      </>
    </ThemeProvider>
  );
};
