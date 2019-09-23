export type SpacingName =
  | 'none'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export const spacings: {[s in SpacingName]: string} = {
    none: '0',
    xxs: '0.25em',
    xs: '0.5em',
    sm: '1em',
    md: '1.5em',
    lg: '2em',
    xl: '4em',
    xxl: '8em',
};

export const spacingNames: SpacingName[] = Object.keys(
    spacings,
) as SpacingName[];
export const spacingValues = Object.values(spacings);
