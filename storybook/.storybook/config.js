import './contexts';
import {configure} from '@storybook/react';

const stories = require.context('../../packages', true, /\.stories\.tsx?$/);

configure(stories, module);
