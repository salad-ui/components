import './contexts';
import {configure} from '@storybook/react';

const stories = [
  require.context('../../packages', true, /\.stories\.tsx?$/),
  require.context('../../playground', true, /\.stories\.tsx?$/),
];

configure(stories, module);
