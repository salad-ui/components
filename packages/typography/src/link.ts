import {fontFamily} from './common';

export const link = () => `
  color: currentColor;
  ${fontFamily}
  color: #0073aa;
	transition-property: border, background, color;
	transition-duration: .05s;
  transition-timing-function: ease-in-out;
  
  :hover,
  :active {
    color: #00a0d2;
  }

  :focus {
    color: #124964;
    box-shadow:
      0 0 0 1px #5b9dd9,
      0 0 2px 1px rgba(30, 140, 190, 0.8);
    /* Only visible in Windows High Contrast mode */
    outline: 1px solid transparent;
  }

`;
