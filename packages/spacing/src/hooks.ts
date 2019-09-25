import {useStyles} from 'react-treat';
import classnames from 'classnames';
import {BreakpointName} from '@salad-ui/media';
import {SpacingName} from './types';
import {margin, padding} from './hooks.treat';

const createSpacingHook = (
    classes: Record<SpacingName, Record<BreakpointName, string>>[],
) => {
    return (spacings: SpacingName | SpacingName[]) => {
        const styles = useStyles(classes);
        if (!Array.isArray(spacings)) {
            return classnames(styles.map(style => style[spacings]['mobile'])); // FIXME: don't hardcode mobile
        }
        return classnames(
            spacings.reduce<string[]>(
                (classNames, spacing) => [
                    ...classNames,
                    ...styles.map(style => style[spacing]['mobile']), // FIXME: don't hardcode mobile
                ],
                [],
            ),
        );
    };
};

export const useMargin = createSpacingHook([
    margin.top,
    margin.right,
    margin.bottom,
    margin.left,
]);
export const useMarginX = createSpacingHook([margin.right, margin.left]);
export const useMarginY = createSpacingHook([margin.top, margin.bottom]);
export const useMarginTop = createSpacingHook([margin.top]);
export const useMarginRight = createSpacingHook([margin.right]);
export const useMarginBottom = createSpacingHook([margin.bottom]);
export const useMarginLeft = createSpacingHook([margin.left]);

export const usePadding = createSpacingHook([
    padding.top,
    padding.right,
    padding.bottom,
    padding.left,
]);
export const usePaddingX = createSpacingHook([padding.right, padding.left]);
export const usePaddingY = createSpacingHook([padding.top, padding.bottom]);
export const usePaddingTop = createSpacingHook([padding.top]);
export const usePaddingRight = createSpacingHook([padding.right]);
export const usePaddingBottom = createSpacingHook([padding.bottom]);
export const usePaddingLeft = createSpacingHook([padding.left]);
