import classnames from 'classnames';
import {fontFamily} from '../font.treat';
import {common, sizes} from './button.treat';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonOptions {
    size: ButtonSize;
}

export const useButton = ({size = 'medium'}: ButtonOptions) =>
    classnames(fontFamily, common, sizes[size]);
