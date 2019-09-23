import {style, styleMap} from 'treat';

export const common = style({
    color: 'currentColor',
    fontWeight: 'normal',
    letterSpacing: 0,
});

export const sizes = styleMap({
    small: {
        fontSize: '14px',
        lineHeight: '20px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '24px',
    },
});
