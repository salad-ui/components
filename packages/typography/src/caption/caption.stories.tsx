import React from 'react';
import {useCaption} from './useCaption';

export default {title: 'typography/caption'};

export const Sizes = () => (
  <>
    <p className={useCaption()}>default</p>
  </>
);
