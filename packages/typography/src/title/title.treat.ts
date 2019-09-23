import {style} from 'treat';

export const common = style({
    color: 'currentColor',
    fontWeight: 550 /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 1,
    textTransform: 'uppercase',
});
