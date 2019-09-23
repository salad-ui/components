import * as React from 'react';

import {FlexyProps} from './Flexy.types';
import {FlexyBase, Item, Block} from './Flexy.styles';

interface FlexyStatic {
    Item: typeof Item;
    Block: typeof Block;
}

const defaultProps = {
    align: 'center',
    justify: 'space-between',
};

const Flexy: React.FC<FlexyProps> & FlexyStatic = props => {
    const mergedProps = {...defaultProps, ...props};
    const {align, className, justify, ...additionalProps} = mergedProps;

    return (
        <FlexyBase
            {...additionalProps}
            className={className}
            align={align}
            justify={justify}
        />
    );
};

Flexy.Item = Item;
Flexy.Block = Block;

export default Flexy;
