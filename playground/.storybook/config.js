import {configure} from '@storybook/react';
import '@design-system-example/components/index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../../packages', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
