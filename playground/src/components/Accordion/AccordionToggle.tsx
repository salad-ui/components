import * as React from 'react';
import { useAccordionContext } from './useAccordionContext';

interface AccordionToggleRenderFunctionProps {
  ref: React.RefObject<HTMLElement>;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  id: string;
  'aria-controls': string;
  'aria-expanded': boolean;
  'data-accordion-toggle-rel': string;
}

interface AccordionToggleRenderFunctionMeta {
  rel: string;
  isExpanded: boolean;
}

type AccordionToggleRenderFunction = (props: AccordionToggleRenderFunctionProps, meta: AccordionToggleRenderFunctionMeta) => React.ReactElement;

export interface AccordionToggleProps {
  rel: string;
  className?: string;
  /** Should be or return a button or a button-like component that is focussable and that triggers onClick when space/enter is pressed */
  children: React.ReactNode | AccordionToggleRenderFunction;
}

export const AccordionToggle = ({rel, children, ...otherProps}: AccordionToggleProps): React.ReactElement => {
  const element = React.useRef<any>(null);
  const {getToggleID, getContentID, expanded, onToggle, getFirstToggle, getLastToggle, getPreviousToggle, getNextToggle} = useAccordionContext();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Home': {
        const toggle = getFirstToggle();
        if (toggle) {
          toggle.focus();
        }
        break;
      }
      case 'End': {
        const toggle = getLastToggle();
        if (toggle) {
          toggle.focus();
        }
        break;
      }
      case 'ArrowUp': {
        const toggle = getPreviousToggle(rel);
        if (toggle) {
          toggle.focus();
        }
        break;
      }
      case 'ArrowDown': {
        const toggle = getNextToggle(rel);
        if (toggle) {
          toggle.focus();
        }
        break;
      }
    }
  }

  const isExpanded = expanded[rel];

  const props = {
    ...otherProps,
    ref: element,
    onClick: () => onToggle(rel), 
    onKeyDown: handleKeyDown,
    id: getToggleID(rel),
    'aria-controls': getContentID(rel),
    'aria-expanded': expanded[rel] || false,
    'data-accordion-toggle-rel': rel
  }

  if (typeof children === 'function') {
    return children(props, {rel, isExpanded});
  }

  return (
    <button {...props}>
      {children}
    </button>
  );
};

