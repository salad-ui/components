import classnames from 'classnames';
import {fontFamily} from '../font.treat';
import {common, sizes} from './body.treat';

export type BodySize = 'small' | 'large';

export interface BodyOptions {
    size?: BodySize;
}

export const useBody = ({size = 'large'}: BodyOptions) =>
    classnames(fontFamily, common, sizes[size]);
