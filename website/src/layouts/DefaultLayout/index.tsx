import * as React from 'react';
import Helmet from 'react-helmet';
import {getPageTitle} from '../../utils/getPageTitle';
import {SiteLayout} from '../../components/SiteLayout';

const DefaultLayout: React.FC = ({children, ...otherProps}) => {
  const title = getPageTitle(otherProps);
  return (
    <>
      <Helmet title={title} />
      <SiteLayout>{children}</SiteLayout>
    </>
  );
};

export default DefaultLayout;
