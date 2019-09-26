import {css, SimpleInterpolation} from 'styled-components';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const breakpoints: {[s in Breakpoint]: number} = {
    mobile: 0,
    tablet: 737,
    desktop: 1025,
};

// @media is always calculated off 16px regardless of whether the root font size is the default or not
const convertPxToEm = (pixels: number): number => pixels / 16;

const createMixinWithSingleCriteria = (
    operator: 'min-width' | 'max-width',
    offset: number = 0,
) => {
    return (name: Breakpoint) => {
        if (
            process.env.NODE_ENV !== 'production' &&
      typeof breakpoints[name] === 'undefined'
        ) {
            throw new Error(`A breakpoint named "${name}" does not exist.`);
        }

        const value = breakpoints[name] || 0;
        return (
            strings: TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ) => {
            // special case for 0 to avoid wrapping styles in an unnecessary @media block
            if (operator === 'min-width' && value === 0) {
                return css(strings, ...interpolations);
            }
            return css`@media (${operator}: ${convertPxToEm(value + offset)}em) {
        ${css(strings, ...interpolations)}
      }`;
        };
    };
};

export const gte = createMixinWithSingleCriteria('min-width');
export const gt = createMixinWithSingleCriteria('min-width', 1);

export const lte = createMixinWithSingleCriteria('max-width');
export const lt = createMixinWithSingleCriteria('max-width', -1);

export const map = <T>(values: T | T[], fn: (value: T) => any) => {
    if (!Array.isArray(values)) {
        return fn(values);
    }
    return values.map((value, index) => {
        const breakpoint = Object.keys(breakpoints)[index] as Breakpoint;
        const tag = gte(breakpoint);
        // @ts-ignore
        const styles = tag([] as TemplateStringsArray, [].concat(fn(value)));
        return styles;
    });
};
