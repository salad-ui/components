import React from 'react';
import {useLink} from './useLink';

export default {title: 'typography/link'};

export const Sizes = () => (
  <>
    <a href="#nowhere" className={useLink()}>
      default
    </a>
  </>
);
