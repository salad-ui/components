import * as React from 'react';
import {useAccordionContext} from './useAccordionContext';

interface AccordionToggleRenderFunctionProps {
  onClick: () => void;
  id: string;
  'aria-controls': string;
  'aria-expanded': boolean;
  'data-accordion-toggle-rel': string;
}

interface AccordionToggleRenderFunctionMeta {
  rel: string;
  isExpanded: boolean;
}

type AccordionToggleRenderFunction = (
  props: AccordionToggleRenderFunctionProps,
  meta: AccordionToggleRenderFunctionMeta,
) => React.ReactElement;

export interface AccordionToggleProps {
  rel: string;
  className?: string;
  /** Should be or return a button or a button-like component that is focussable and that triggers onClick when space/enter is pressed */
  children: React.ReactNode | AccordionToggleRenderFunction;
}

export const AccordionToggle = ({
  rel,
  children,
  ...otherProps
}: AccordionToggleProps): React.ReactElement => {
  const {getToggleID, getContentID, expanded, onToggle} = useAccordionContext();

  const isExpanded = expanded[rel];

  const props = {
    ...otherProps,
    onClick: () => onToggle(rel),
    id: getToggleID(rel),
    'aria-controls': getContentID(rel),
    'aria-expanded': expanded[rel] || false,
    'data-accordion-toggle-rel': rel,
  };

  if (typeof children === 'function') {
    return children(props, {rel, isExpanded});
  }

  return <button {...props}>{children}</button>;
};
