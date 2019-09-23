import {style, styleMap} from 'treat';

export const common = style({
    fontWeight: 550 /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */,
    letterSpacing: 0,
});

export const sizes = styleMap({
    small: {
        fontSize: '14px',
        lineHeight: '20px',
    },
    medium: {
        fontSize: '14px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '24px',
    },
});
