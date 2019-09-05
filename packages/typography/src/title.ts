import {fontFamily} from './common';

export const title = () => `
  color: currentColor;
  ${fontFamily}
  font-size: 12px;
  font-weight: 550; /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */
  line-height: 16px;
  letter-spacing: 1;
  text-transform: uppercase;
`;
