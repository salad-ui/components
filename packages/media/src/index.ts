export type BreakpointName = 'mobile' | 'tablet' | 'desktop';

export const breakpoints: {[s in BreakpointName]: string} = {
    mobile: 'screen and (min-width: 0)',
    tablet: 'screen and (min-width: 737px)',
    desktop: 'screen and (min-width: 1025px)',
};

export const breakpointNames: BreakpointName[] = Object.keys(
    breakpoints,
) as BreakpointName[];
export const breakpointValues = Object.values(breakpoints);
