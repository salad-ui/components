import * as React from 'react';

export interface AccordionContextProps {
  // generate IDs for accessibility
  getToggleID: (rel: string) => string;
  getContentID: (rel: string) => string;

  // track expanded states
  expanded: {[rel: string]: boolean};
  onToggle: (rel: string) => void;
}

export const AccordionContext = React.createContext<AccordionContextProps | null>(
  null,
);
