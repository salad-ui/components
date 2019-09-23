import classnames from 'classnames';
import {fontFamily} from '../font.treat';
import {common, sizes} from './subtitle.treat';

export type SubtitleSize = 'small' | 'large';

export interface SubtitleOptions {
    size: SubtitleSize;
}

export const useSubtitle = ({size}: SubtitleOptions) =>
    classnames(fontFamily, common, sizes[size]);
