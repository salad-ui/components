import React from 'react';
import {useTitle} from './useTitle';

export default {title: 'typography/title'};

export const Sizes = () => (
  <>
    <span className={useTitle()}>default</span>
  </>
);
