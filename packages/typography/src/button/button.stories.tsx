import React from 'react';
import {useButton} from './useButton';

export default {title: 'typography/button'};

export const Sizes = () => (
  <>
    <button className={useButton({size: 'large'})}>Large</button>
    <button className={useButton({size: 'small'})}>Small</button>
  </>
);
