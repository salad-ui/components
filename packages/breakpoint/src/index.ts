import {
  DefaultBreakpointName,
  defaults,
  createBreakpoint,
  createMap,
  ValueConstraint,
  ValueOrValueMap as GenericValueOrValueMap,
} from 'styled-components-breakpoint';

export type BreakpointName = DefaultBreakpointName;
export type ValueOrValueMap<V extends ValueConstraint> = GenericValueOrValueMap<
  BreakpointName,
  V
>;

export const breakpoint = createBreakpoint(defaults);
export const map = createMap(defaults);

export {defaults as breakpoints, breakpoint as default};
