import * as React from 'react';
import {ExpanderState} from './types';
import {measureWidthOrHeight} from './measureWidthOrHeight';
import {Wrapper} from './index.style';

type FocusOn = 'expand' | 'expanded';

export interface ExpanderProps {

  isExpanded: boolean;
  onExpand?: () => void;
  onExpanded?: () => void;
  onCollapse?: () => void;
  onCollapsed?: () => void;

  focusOn?: FocusOn;
  isHorizontal?: boolean;

  id?: string;
  role?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  tabIndex?: number;
  
  children?: React.ReactNode;
}

export const Expander: React.FC<ExpanderProps> = ({
  isExpanded = true,
  onExpand,
  onExpanded,
  onCollapse,
  onCollapsed,

  focusOn,
  isHorizontal = false,

  children, 
  ...otherProps
}) => {
  const property = isHorizontal ? 'width' : 'height';
  const mounted = React.useRef<boolean | null>(null);
  const raf = React.useRef<number | null>(null);
  const timeout = React.useRef<number | null>(null);
  const element = React.useRef<HTMLDivElement>(null);
  const widthOrHeight = React.useRef<number | null>(null);
  const [state, setState] = React.useState<ExpanderState>(isExpanded ? 'expanded' : 'collapsed');

  const handleCollapse = () => {
    onCollapse && onCollapse();
  };

  const handleCollapsed = () => {
    onCollapsed && onCollapsed();
  };

  const handleExpand = () => {
    onExpand && onExpand();
    focusOn === 'expand' && element.current && element.current.focus();
  };

  const handleExpanded = () => {
    onExpanded && onExpanded();
    focusOn === 'expanded' && element.current && element.current.focus();
  };

  React.useEffect(() => {

    // don't try and transition on the first render
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    // clear any in-progress transitions
    if (raf.current) {
      cancelAnimationFrame(raf.current);
    }
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // if the `collapse` prop has changed and we're not already in a collapsing state (e.g. first render) then start the transition
    if (!isExpanded) {
      // measure the expanded width/height of the element in-case the `children` have changed from last time we transitioned 
      widthOrHeight.current = measureWidthOrHeight(element, property);
      // use `requestAnimationFrame` to prevent react from batching renders so the transition styles are applied correctly
      raf.current = window.requestAnimationFrame(() => {
        setState('collapse');
        handleCollapse();
      });
    }
    
    // if the `collapse` prop has changed and we're not already in an expanding state (e.g. first render) then start the transition
    if (isExpanded) {
      // measure the expanded width/height of the element in-case the `children` have changed from last time we transitioned 
      widthOrHeight.current = measureWidthOrHeight(element, property);
      // use `requestAnimationFrame` to prevent react from batching renders so the transition styles are applied correctly
      raf.current = window.requestAnimationFrame(() => {
        setState('expand');
        handleExpand();
      });
    }

  }, [isExpanded, isHorizontal]);

  React.useEffect(() => {
    switch (state) {
      case 'collapse': {
        // use `requestAnimationFrame` to prevent react from batching renders so the transition styles are applied correctly
        raf.current = window.requestAnimationFrame(() => {
          setState('collapsing');
          // use setTimeout to wait for the transition to complete - could attempt to use transitionend
          timeout.current = window.setTimeout(() => {
            setState('collapsed');
            handleCollapsed();
          }, 300);
        });
        break;
      }
      case 'expand': {
        // use `requestAnimationFrame` to prevent react from batching renders so the transition styles are applied correctly
        raf.current = window.requestAnimationFrame(() => {
          setState('expanding');
          // use setTimeout to wait for the transition to complete - could attempt to use transitionend
          timeout.current = window.setTimeout(() => {
            setState('expanded');
            handleExpanded();
          }, 300);
        });
        break;
      }
    }
  }, [state]);

  // unmount the component when `collapsed` (but we need it mounted before we measure in the `expand` state)
  if (!isExpanded && state === 'collapsed') {
    return null;
  }

  return (
    <Wrapper 
      ref={element} 
      state={state} 
      property={property} 
      widthOrHeight={widthOrHeight} 
      tabIndex={focusOn ? -1 : undefined}
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
};
