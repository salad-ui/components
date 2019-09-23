import {style, styleMap} from 'treat';
import {shade, tint} from 'polished';
import * as colors from '@carrot-components/color';

const primary = colors.blue50;

export const common = style({
    display: 'inline-flex',
    textDecoration: 'none',
    border: '0',
    cursor: 'pointer',
    background: 'none',
    borderRadius: '3px',
    whiteSpace: 'nowrap',
});

export const sizes = styleMap({
    small: {
        height: '24px',
        lineHeight: '22px',
        padding: '0 8px 1px',
        fontSize: '11px',
    },
    medium: {
        height: '28px',
        lineHeight: '26px',
        padding: '0 10px 1px',
    },
    large: {
        height: '30px',
        lineHeight: '28px',
        padding: '0 12px 2px',
    },
});

const raisedStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
};

export const variants = styleMap({
    primary: {
        ...raisedStyle,
        color: colors.white,
        backgroundColor: primary,
        borderColor: `${shade(0.2, primary)} ${shade(0.25, primary)} ${shade(
            0.25,
            primary,
        )}`,
        boxShadow: `inset 0 -1px 0 ${shade(0.25, primary)}`,
        textShadow: `
      0 -1px 1px ${shade(0.3, primary)},
      1px 0 1px ${shade(0.3, primary)},
      0 1px 1px ${shade(0.3, primary)},
      -1px 0 1px ${shade(0.3, primary)}
    `,
        selectors: {
            '&:hover:enabled, &:focus:enabled': {
                color: colors.white,
                backgroundColor: shade(0.05, primary),
                borderColor: shade(0.5, primary),
            },

            '&:hover:enabled': {
                boxShadow: `inset 0 -1px 0 ${shade(0.5, primary)})`,
            },

            '&:focus:enabled': {
                boxShadow: `
          inset 0 -1px 0 ${shade(0.5, primary)},
          0 0 0 1px ${colors.white},
          0 0 0 3px ${shade(0.5, primary)}
        `,
            },

            '&:active:enabled': {
                backgroundColor: shade(0.2, primary),
                borderColor: shade(0.5, primary),
                boxShadow: `inset 0 1px 0 ${shade(0.5, primary)}`,
            },

            '&:disabled': {
                color: tint(0.4, primary),
                backgroundColor: primary,
                borderColor: shade(0.07, primary),
                boxShadow: 'none',
                textShadow: 'none',
            },

            '&.carrot-button--busy, &.carrot-button--busy:disabled': {
                color: colors.white,
                backgroundSize: '100px 100%',
                backgroundImage: `linear-gradient(
          -45deg,
          ${primary} 28%,
          ${shade(0.3, primary)} 28%,
          ${shade(0.3, primary)} 72%,
          ${primary} 72%
        )`,
                borderColor: shade(0.5, primary),
            },
        },
    },

    secondary: {
        ...raisedStyle,
        color: '#555',
        borderColor: '#ccc',
        background: '#f7f7f7',
        boxShadow: 'inset 0 -1px 0 #ccc',
        verticalAlign: 'top',

        selectors: {
            '&:hover:enabled': {
                background: '#fafafa',
                borderColor: '#999',
                boxShadow: 'inset 0 -1px 0 #999',
                color: '#23282d',
                textDecoration: 'none',
            },

            '&:focus:enabled': {
                background: '#fafafa',
                color: '#23282d',
                borderColor: '#999',
                boxShadow: `inset 0 -1px 0 #999, 0 0 0 1px ${colors.white},
          0 0 0 3px ${primary}`,
                textDecoration: 'none',
            },

            '&:active:enabled': {
                background: '#eee',
                borderColor: '#999',
                boxShadow: 'inset 0 1px 0 #999',
            },

            '&:disabled': {
                color: '#a0a5aa',
                borderColor: '#ddd',
                background: '#f7f7f7',
                boxShadow: 'none',
                textShadow: '0 1px 0 #fff',
                transform: 'none',
            },
        },
    },
});

export const busy = style({
    selectors: {
        '&, &:disabled': {
            '@keyframes': {
                from: {
                    backgroundPosition: '200px 0',
                },
            },
            animation: '@keyframes 2500ms infinite linear',
            backgroundSize: '100px 100%',
            backgroundImage: `repeating-linear-gradient(
        -45deg,
        ${colors.grey50},
        ${colors.white} 11px,
        ${colors.white} 10px,
        ${colors.grey50} 20px
      )`,
            opacity: 1,
        },
    },
});
