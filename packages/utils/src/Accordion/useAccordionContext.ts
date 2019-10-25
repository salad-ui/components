import * as React from 'react';
import {AccordionContext} from './AccordionContext';

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion.Toggle and Accordion.Content components must be nested in a Accordion component.',
    );
  }
  return context;
};
