import {
  DefaultBreakpointName,
  defaults,
  createBreakpoint,
  createMap,
} from 'styled-components-breakpoint';

export const breakpoint = createBreakpoint(defaults);
export const map = createMap(defaults);

export {
  DefaultBreakpointName as BreakpointName,
  defaults as breakpoints,
  breakpoint as default,
};
