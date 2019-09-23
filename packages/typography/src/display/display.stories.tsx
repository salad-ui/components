import React from 'react';
import {useDisplay} from './useDisplay';

export default {title: 'typography/display'};

export const Sizes = () => (
  <>
    <h1 className={useDisplay({size: 'large'})}>Large</h1>
    <h2 className={useDisplay({size: 'medium'})}>Large</h2>
    <h3 className={useDisplay({size: 'small'})}>Large</h3>
  </>
);
