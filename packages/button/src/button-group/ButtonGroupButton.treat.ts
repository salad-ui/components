import {style} from 'treat';

export const common = style(
    {
        selectors: {
            '&:first-of-type': {
                borderRadius: '3px 0 0 3px',
            },
            '&:last-of-type': {
                borderRadius: '0 3px 3px 0',
            },
            '& + &': {
                marginLeft: '-1px',
            },
        },
    },
    'button-group-button',
);
