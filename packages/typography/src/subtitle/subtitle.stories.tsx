import React from 'react';
import {useSubtitle} from './useSubtitle';

export default {title: 'typography/subtitle'};

export const Sizes = () => (
  <>
    <h1 className={useSubtitle({size: 'large'})}>Large</h1>
    <h1 className={useSubtitle({size: 'small'})}>Small</h1>
  </>
);
