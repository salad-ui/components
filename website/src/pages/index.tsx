import * as React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import {HeroHome} from '../components';

export const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <HeroHome />
    </DefaultLayout>
  );
};

export default HomePage;
