import {style, CSSProperties} from 'treat';
import {BreakpointName, breakpoints, breakpointNames} from '@salad-ui/media';
import {SpacingName, spacings, spacingNames} from './types';

export type SpacingClasses = Record<
'top' | 'right' | 'left' | 'bottom',
Record<SpacingName, Record<BreakpointName, string>>
>;

/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
const createSpacingClassesAtBreakpoints = (
    propertyName: keyof CSSProperties,
) => {
    return spacingNames.reduce(
        (classMap, spacingName) => ({
            ...classMap,
            [spacingName]: breakpointNames.reduce(
                (styleMap, breakpointName) => ({
                    ...styleMap,
                    [breakpointName]: style({
                        '@media': {
                            [breakpoints[breakpointName]]: {
                                [propertyName]: spacings[spacingName],
                            },
                        },
                    }),
                }),
                {},
            ),
        }),
        {} as Record<SpacingName, Record<BreakpointName, string>>,
    );
};
/* eslint-enable @typescript-eslint/no-object-literal-type-assertion */

export const margin: SpacingClasses = {
    top: createSpacingClassesAtBreakpoints('marginTop'),
    right: createSpacingClassesAtBreakpoints('marginRight'),
    bottom: createSpacingClassesAtBreakpoints('marginBottom'),
    left: createSpacingClassesAtBreakpoints('marginLeft'),
};

export const padding: SpacingClasses = {
    top: createSpacingClassesAtBreakpoints('paddingTop'),
    right: createSpacingClassesAtBreakpoints('paddingRight'),
    bottom: createSpacingClassesAtBreakpoints('paddingBottom'),
    left: createSpacingClassesAtBreakpoints('paddingLeft'),
};
