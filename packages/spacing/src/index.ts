import {map} from '@salad-ui/breakpoint/srcpoint';

export type Spacing = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const spacings: {[s in Spacing]: string} = {
    none: '0',
    xxs: '0.25em',
    xs: '0.5em',
    sm: '1em',
    md: '1.5em',
    lg: '2em',
    xl: '4em',
    xxl: '8em',
};

// FIXME: type properties as CSSProperty
// FIXME: check size exists
// FIXME: make responsive
const createMixin = (properties: string[]) => (sizes: Spacing | Spacing[]) =>
    map(sizes, size =>
        properties.reduce(
            (style, property) => ({
                ...style,
                [property]: spacings[size],
            }),
            {},
        ),
    );

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
