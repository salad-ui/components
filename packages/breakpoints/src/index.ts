import {
  DefaultBreakpointName,
  defaults,
  createBreakpoint,
  createMap,
} from 'styled-components-breakpoint';

export {
  DefaultBreakpointName as BreakpointName,
  defaults as breakpoints,
  breakpoint as default,
};

export const breakpoint = createBreakpoint(defaults);
export const map = createMap(defaults);
