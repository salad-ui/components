import * as React from 'react';
import {FocusGroupOrientation} from './types';

export interface FocusGroupContext {
  orientation: FocusGroupOrientation;

  register: (element: HTMLElement) => void;
  unregister: (element: HTMLElement) => void;

  focusFirst: () => void;
  focusLast: () => void;
  focusPrevious: (element: HTMLElement) => void;
  focusNext: (element: HTMLElement) => void;
}

const warn = () =>
  console.warn('FocusGroup.Item should be nested within a FocusGroup');

export const FocusGroupContext = React.createContext<FocusGroupContext>({
  orientation: 'horizontal',

  register: warn,
  unregister: warn,

  focusFirst: warn,
  focusLast: warn,
  focusPrevious: warn,
  focusNext: warn,
});
