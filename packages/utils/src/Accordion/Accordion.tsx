import * as React from 'react';
import {useUIDSeed} from 'react-uid';
import {AccordionContext, AccordionContextProps} from './AccordionContext';
import {AccordionToggle} from './AccordionToggle';
import {AccordionContent} from './AccordionContent';

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
  return rels.reduce(
    (relsMap, rel) => ({
      ...relsMap,
      [rel]: true,
    }),
    {},
  );
};

export const Accordion: React.FC<AccordionProps> & AccordionStatic = ({
  expanded,
  onToggle,
  children,
  ...otherProps
}) => {
  const getID = useUIDSeed();
  const element = React.useRef<HTMLElement>(null);

  const context = React.useMemo(
    (): AccordionContextProps => ({
      getToggleID: rel => getID(`${rel}-toggle`),
      getContentID: rel => getID(`${rel}-content`),
      expanded: convertArrayToMap(expanded),
      onToggle,
    }),
    [getID, expanded, onToggle],
  );

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <AccordionContext.Provider value={context}>
      <div ref={element as React.RefObject<any>} {...otherProps}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
};

Accordion.Toggle = AccordionToggle;
Accordion.Content = AccordionContent;
