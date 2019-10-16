import * as React from 'react';
import {glyphs} from '.';

export default {
  title: 'components/Icon',
};

export const Icons = () => (
  <>
    {Object.keys(glyphs)
      .filter(name => name !== 'Icon')
      .map(name => React.createElement(glyphs[name], {key: name}))}
  </>
);
