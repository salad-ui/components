import * as React from 'react';
import {Theme} from '@salad-ui/theme';
import {Header} from './Header';
import {Footer} from './Footer';
import {
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
      <Wrapper>
        <Header />
        <BodyWrapper>
          {sidebar && <SidebarWrapper>{sidebar}</SidebarWrapper>}
          <ContentWrapper isFullWidth={!Boolean(sidebar)}>
            {children}
          </ContentWrapper>
        </BodyWrapper>
        <Footer />
      </Wrapper>
    </Theme>
  );
};
