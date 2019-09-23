import {style, styleMap} from 'treat';

export const common = style({
    color: 'currentColor',
    fontWeight: 'normal',
    letterSpacing: 0,
});

export const sizes = styleMap({
    small: {
        fontSize: '20px',
        lineHeight: '28px',
    },
    medium: {
        fontSize: '24px',
        lineHeight: '32px',
    },
    large: {
        fontSize: '32px',
        lineHeight: '40px',
    },
});
