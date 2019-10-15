import * as React from 'react';
import { Expander } from '../Expander';
import {useAccordionContext} from './useAccordionContext';

export interface AccordionContentProps {
  rel: string;
  children?: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({rel, children, ...otherProps}) => {
  const {getToggleID, getContentID, expanded: isExpanded} = useAccordionContext();
  return (
    <Expander 
      {...otherProps}  
      isExpanded={Boolean(isExpanded[rel])}
      role="region"
      id={getContentID(rel)} 
      aria-labelledby={getToggleID(rel)}
    >
      {children}
    </Expander>
  )
};

