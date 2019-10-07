import {map} from '@salad-ui/breakpoint';
import {
  createMargin,
  createMarginX,
  createMarginY,
  createMarginTop,
  createMarginRight,
  createMarginBottom,
  createMarginLeft,
  createPadding,
  createPaddingX,
  createPaddingY,
  createPaddingTop,
  createPaddingRight,
  createPaddingBottom,
  createPaddingLeft,
} from 'styled-components-spacing';

export type Spacing = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;

export const spacings: {[s in Spacing]: string} = {
  0: '0',
  0.5: '4px',
  1: '8px',
  1.5: '12px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
};

export const m = createMargin(map, spacings);
export const mx = createMarginX(map, spacings);
export const my = createMarginY(map, spacings);
export const mt = createMarginTop(map, spacings);
export const mr = createMarginRight(map, spacings);
export const mb = createMarginBottom(map, spacings);
export const ml = createMarginLeft(map, spacings);

export const p = createPadding(map, spacings);
export const px = createPaddingX(map, spacings);
export const py = createPaddingY(map, spacings);
export const pt = createPaddingTop(map, spacings);
export const pr = createPaddingRight(map, spacings);
export const pb = createPaddingBottom(map, spacings);
export const pl = createPaddingLeft(map, spacings);
