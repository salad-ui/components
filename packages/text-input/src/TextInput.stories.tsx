import React from 'react';
import {TextInput} from './TextInput';

export default {
  title: 'components/TextInput',
};

export const Minimal = () => (
  <>
    <TextInput />
  </>
);

export const IsCompact = () => (
  <>
    <TextInput isCompact />
  </>
);

export const IsFullWidth = () => (
  <>
    <TextInput isFullWidth />
  </>
);

export const IsInvalid = () => (
  <>
    <TextInput isInvalid />
  </>
);
