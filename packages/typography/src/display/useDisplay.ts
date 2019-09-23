import classnames from 'classnames';
import {fontFamily} from '../font.treat';
import {common, sizes} from './display.treat';

export type DisplaySize = 'small' | 'medium' | 'large';

export interface DisplayOptions {
    size: DisplaySize;
}

export const useDisplay = ({size}: DisplayOptions) => {
    return classnames(fontFamily, common, sizes[size]);
};
