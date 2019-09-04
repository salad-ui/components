import {fontFamily} from './common';

export type DisplaySize = 'lg' | 'md' | 'sm';

export interface DisplayOptions {
  size: DisplaySize;
}

const displaySize = (size: DisplaySize) => {
  switch (size) {
    case 'lg':
      return `
        font-size: 32px;
        line-height: 40px;
      `;
    case 'md':
      return `
        font-size: 24px;
        line-height: 32px;
      `;
    case 'sm':
      return `
        font-size: 20px;
        line-height: 28px;
      `;
  }
};

export const display = ({size}: DisplayOptions) => `
  color: currentColor;
  ${fontFamily}
  font-weight: normal;
  ${displaySize(size)}
  letter-spacing: 0;
`;
