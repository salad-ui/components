import {fontFamily} from './common';

export type SubtitleSize = 'default' | 'sm';

export interface SubtitleOptions {
  size?: SubtitleSize;
}

const subtitleSize = (size: SubtitleSize) => {
  switch (size) {
    case 'default':
      return `
        font-size: 16px;
        line-height: 24px;
      `;
    case 'sm':
      return `
        font-size: 14px;
        line-height: 20px;
      `;
  }
};

export const subtitle = ({size = 'default'}: SubtitleOptions = {}) => `
  color: currentColor;  
  ${fontFamily}
  font-weight: 550; /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */
  ${subtitleSize(size)}
  letter-spacing: 0;
`;
