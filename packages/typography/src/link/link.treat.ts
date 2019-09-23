import {style} from 'treat';

export const common = style({
    cursor: 'pointer',
    // color: 'currentColor',
    color: '#0073aa',
    fontWeight: 'normal',

    transitionProperty: 'border, background, color',
    transitionDuration: '.05s',
    transitionTimingFunction: `ease-in-out`,
    selectors: {
        '&:hover, &:active': {
            color: '#00a0d2',
        },
        '&:focus': {
            color: '#124964',
            boxShadow: `0 0 0 1px #5b9dd9,
        0 0 2px 1px rgba(30, 140, 190, 0.8)`,
            outline: '1px solid transparent',
        },
    },
});
