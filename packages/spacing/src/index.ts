import {map} from '@salad-ui/breakpoint';
import {
  createMargin,
  createMarginX,
  createMarginY,
  createMarginTop,
  createMarginRight,
  createMarginBottom,
  createMarginLeft,
  createMarginProps,
  createPadding,
  createPaddingX,
  createPaddingY,
  createPaddingTop,
  createPaddingRight,
  createPaddingBottom,
  createPaddingLeft,
  createPaddingProps,
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

export const margin = createMargin(map, spacings);
export const marginY = createMarginY(map, spacings);
export const marginX = createMarginX(map, spacings);
export const marginTop = createMarginTop(map, spacings);
export const marginRight = createMarginRight(map, spacings);
export const marginBottom = createMarginBottom(map, spacings);
export const marginLeft = createMarginLeft(map, spacings);

export const padding = createPadding(map, spacings);
export const paddingY = createPaddingY(map, spacings);
export const paddingX = createPaddingX(map, spacings);
export const paddingTop = createPaddingTop(map, spacings);
export const paddingRight = createPaddingRight(map, spacings);
export const paddingBottom = createPaddingBottom(map, spacings);
export const paddingLeft = createPaddingLeft(map, spacings);

export {
  margin as m,
  marginX as mx,
  marginY as my,
  marginTop as mt,
  marginRight as mr,
  marginBottom as mb,
  marginLeft as ml,
  padding as p,
  paddingX as px,
  paddingY as py,
  paddingTop as pt,
  paddingRight as pr,
  paddingBottom as pb,
  paddingLeft as pl,
};

export const marginProps = createMarginProps({
  margin,
  marginY,
  marginX,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
});

export const paddingProps = createPaddingProps({
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
});
