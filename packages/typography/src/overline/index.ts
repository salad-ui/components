import {fontFamily, fontWeightSemibold} from '../common';

export const overline = () => `
  ${fontFamily}
  ${fontWeightSemibold}
  color: currentColor;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1;
  text-transform: uppercase;
`;
