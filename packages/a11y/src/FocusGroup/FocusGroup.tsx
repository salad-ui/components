import * as React from 'react';
import {FocusGroupOrientation} from './types';
import {FocusGroupContext} from './FocusGroupContext';
import {FocusGroupItem} from './FocusGroupItem';

const DOCUMENT_POSITION_PRECEDING = 2;
const DOCUMENT_POSITION_FOLLOWING = 4;

export interface FocusGroupStatic {
  Item: typeof FocusGroupItem;
}

export interface FocusGroupProps {
  orientation: FocusGroupOrientation;
}

function findBest<T>(
  list: T[],
  better: (item: T, best: T | undefined) => boolean,
): T | undefined {
  let best: T | undefined = undefined;
  for (const item of list) {
    if (better(item, best)) {
      best = item;
    }
  }
  return best;
}

export const FocusGroup: React.FC<FocusGroupProps> & FocusGroupStatic = ({
  orientation,
  children,
}) => {
  const elements = React.useRef<HTMLElement[]>([]);
  const context = React.useMemo<FocusGroupContext>(
    () => ({
      orientation,

      register(element) {
        elements.current.push(element);
      },

      unregister(element) {
        elements.current = elements.current.filter(el => el !== element);
      },

      focusFirst() {
        const found = findBest(elements.current, (item, first) => {
          return (
            first === undefined ||
            first.compareDocumentPosition(item) === DOCUMENT_POSITION_PRECEDING
          );
        });
        if (found) {
          found.focus();
        }
      },

      focusLast() {
        const found = findBest(elements.current, (item, last) => {
          return (
            last === undefined ||
            last.compareDocumentPosition(item) === DOCUMENT_POSITION_FOLLOWING
          );
        });
        if (found) {
          found.focus();
        }
      },

      focusPrevious(element) {
        const found = findBest(elements.current, (item, prev) => {
          return (
            element.compareDocumentPosition(item) ===
              DOCUMENT_POSITION_PRECEDING &&
            (!prev ||
              prev.compareDocumentPosition(item) ===
                DOCUMENT_POSITION_FOLLOWING)
          );
        });
        if (found) {
          found.focus();
        }
      },

      focusNext(element) {
        const found = findBest(elements.current, (item, next) => {
          return (
            element.compareDocumentPosition(item) ===
              DOCUMENT_POSITION_FOLLOWING &&
            (!next ||
              next.compareDocumentPosition(item) ===
                DOCUMENT_POSITION_PRECEDING)
          );
        });
        if (found) {
          found.focus();
        }
      },
    }),
    [orientation],
  );
  return (
    <FocusGroupContext.Provider value={context}>
      {children}
    </FocusGroupContext.Provider>
  );
};

FocusGroup.Item = FocusGroupItem;
