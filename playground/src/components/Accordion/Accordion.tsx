import * as React from 'react';
import {useUIDSeed} from 'react-uid';
import { AccordionContext, AccordionContextProps } from './AccordionContext';
import { AccordionToggle } from './AccordionToggle';
import { AccordionContent } from './AccordionContent';

export interface AccordionStatic {
  Toggle: typeof AccordionToggle;
  Content: typeof AccordionContent;
}

export interface AccordionProps {
  expanded: string | string[];
  onToggle: (rel: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const convertArrayToMap = (relOrRels: string | string[]) => {
  const rels = Array.isArray(relOrRels) ? relOrRels : [relOrRels];
  return rels.reduce((relsMap, rel) => ({
    ...relsMap,
    [rel]: true
  }), {});
}

const findToggleElements = (element: React.RefObject<HTMLElement>): HTMLElement[] => {
  if (!element.current) {
    return [];
  }
  return [].slice.call(element.current.querySelectorAll('[data-accordion-toggle-rel]'));
}

export const Accordion: React.FC<AccordionProps> & AccordionStatic = ({expanded, onToggle, children, ...otherProps}) => {
  const getID = useUIDSeed();
  const element = React.useRef<HTMLElement>(null);

  const context = React.useMemo(
    (): AccordionContextProps => ({

      getToggleID: rel => getID(`${rel}-toggle`),
      getContentID: rel => getID(`${rel}-content`),

      expanded: convertArrayToMap(expanded),
      onToggle,

      getFirstToggle: () => {
        const toggles = findToggleElements(element);
        return toggles[0];
      },

      getLastToggle: () => {
        const toggles = findToggleElements(element);
        return toggles[toggles.length - 1];
      },

      getPreviousToggle: (rel: string) => {
        const toggles = findToggleElements(element);
        const selfIndex = toggles.findIndex(element => element.dataset.accordionToggleRel === rel);
        if (selfIndex === -1) {
          return undefined;
        }
        return toggles[selfIndex - 1];
      },

      getNextToggle: (rel: string) => {
        const toggles = findToggleElements(element);
        const selfIndex = toggles.findIndex(element => element.dataset.accordionToggleRel === rel);
        if (selfIndex === -1) {
          return undefined;
        }
        return toggles[selfIndex + 1];
      },

    }), 
    [getID, expanded, onToggle]
  );
  
  return (
    <AccordionContext.Provider value={context}>
      <div ref={element as React.RefObject<any>} {...otherProps}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
};

Accordion.Toggle = AccordionToggle;
Accordion.Content = AccordionContent;
