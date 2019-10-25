import * as React from 'react';
import {PageLayout} from './PageLayout';
import {Header} from './Header';
import {NavigationDrawer} from './NavigationDrawer';

export interface PageTemplateProps {
  content: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({content}) => (
  <PageLayout>
    {{
      header: <Header />,
      left: <NavigationDrawer />,
      content: content,
    }}
  </PageLayout>
);
