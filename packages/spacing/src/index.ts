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

const margin = createMargin(map, spacings);
const marginY = createMarginY(map, spacings);
const marginX = createMarginX(map, spacings);
const marginTop = createMarginTop(map, spacings);
const marginRight = createMarginRight(map, spacings);
const marginBottom = createMarginBottom(map, spacings);
const marginLeft = createMarginLeft(map, spacings);

const padding = createPadding(map, spacings);
const paddingY = createPaddingY(map, spacings);
const paddingX = createPaddingX(map, spacings);
const paddingTop = createPaddingTop(map, spacings);
const paddingRight = createPaddingRight(map, spacings);
const paddingBottom = createPaddingBottom(map, spacings);
const paddingLeft = createPaddingLeft(map, spacings);

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
