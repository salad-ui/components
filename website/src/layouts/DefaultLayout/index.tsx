import * as React from 'react';
import {getPageTitle} from '../../utils/getPageTitle';
import {SEO} from '../../components/SEO';
import {SiteLayout} from '../../components/SiteLayout';

const DefaultLayout: React.FC = ({children, ...otherProps}) => {
  const title = getPageTitle(otherProps);
  return (
    <>
      <SEO title={title} />
      <SiteLayout>{children}</SiteLayout>
    </>
  );
};

export default DefaultLayout;
