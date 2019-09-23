import React from 'react';
import {useBody} from './useBody';

export default {title: 'typography/body'};

export const Sizes: React.FC = () => (
  <>
    <h1 className={useBody({size: 'large'})}>Large</h1>
    <h2 className={useBody({size: 'small'})}>Small</h2>
  </>
);
