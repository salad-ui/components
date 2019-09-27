// import {map} from '@salad-ui/breakpoint';

export type Spacing = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;

export const spacings: {[s in Spacing]: string} = {
    0: '0',
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
};

// FIXME: type properties as CSSProperty
// FIXME: check size exists
// FIXME: make responsive
const createMixin = (properties: string[]) => (size: Spacing) =>
    properties.reduce(
        (style, property) => ({
            ...style,
            [property]: spacings[size],
        }),
        {},
    );
// map(sizes, size =>
//     properties.reduce(
//         (style, property) => ({
//             ...style,
//             [property]: spacings[size],
//         }),
//         {},
//     ),
// );

export const m = createMixin(['margin']);
export const my = createMixin(['marginTop', 'marginBottom']);
export const mx = createMixin(['marginLeft', 'marginRight']);
export const mt = createMixin(['marginTop']);
export const mr = createMixin(['marginRight']);
export const mb = createMixin(['marginBottom']);
export const ml = createMixin(['marginLeft']);

export const p = createMixin(['padding']);
export const py = createMixin(['paddingTop', 'paddingBottom']);
export const px = createMixin(['paddingLeft', 'paddingRight']);
export const pt = createMixin(['paddingTop']);
export const pr = createMixin(['paddingRight']);
export const pb = createMixin(['paddingBottom']);
export const pl = createMixin(['paddingLeft']);
