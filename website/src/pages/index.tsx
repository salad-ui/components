import * as React from 'react';
import Layout from '../layouts/BaseLayout';
import HeroHome from '../components/HeroHome';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroHome />
    </Layout>
  );
};

export default HomePage;
