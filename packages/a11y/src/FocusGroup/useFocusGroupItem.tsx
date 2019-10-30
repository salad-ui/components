import * as React from 'react';
import {FocusGroupContext} from './FocusGroupContext';

export interface UseFocusGroupItemOptions {
  disabled?: boolean;
}

export interface UseFocusGroupItemResult {
  ref: React.RefObject<any>;
  disabled: boolean;
  onKeyDown: (event: React.KeyboardEvent<any>) => void;
}

export const useFocusGroupItem = ({
  disabled = false,
}: UseFocusGroupItemOptions = {}): UseFocusGroupItemResult => {
  const {
    orientation,
    register,
    unregister,
    focusFirst,
    focusLast,
    focusNext,
    focusPrevious,
  } = React.useContext(FocusGroupContext);
  const element = React.useRef<HTMLElement>(null);

  // register on mount and unregister on unmount
  // unregister when disabled and register when enabled
  React.useEffect(() => {
    const el = element.current;
    if (el) {
      if (disabled) {
        unregister(el);
      } else {
        register(el);
      }
    }
    return () => {
      if (el) {
        unregister(el);
      }
    };
  }, [disabled, register, unregister]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Home': {
        focusFirst();
        break;
      }
      case 'End': {
        focusLast();
        break;
      }
      case 'ArrowUp': {
        if (element.current && orientation === 'vertical') {
          focusPrevious(element.current);
        }
        break;
      }
      case 'ArrowDown': {
        if (element.current && orientation === 'vertical') {
          focusNext(element.current);
        }
        break;
      }
      case 'ArrowLeft': {
        if (element.current && orientation === 'horizontal') {
          focusPrevious(element.current);
        }
        break;
      }
      case 'ArrowRight': {
        if (element.current && orientation === 'horizontal') {
          focusNext(element.current);
        }
        break;
      }
    }
  };

  return {
    ref: element,
    disabled,
    onKeyDown: handleKeyDown,
  };
};
