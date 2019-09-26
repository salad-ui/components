import {fontFamily} from '../common';

export type SubtitleSize = 'small' | 'large';

export interface SubtitleOptions {
    size: SubtitleSize;
}

const sizes = (size: SubtitleSize) => {
    switch (size) {
        case 'small':
            return `
        font-size: 14px;
        line-height: 20px;
      `;
        case 'large':
            return `
        font-size: 16px;
        line-height: 24px;
      `;
    }
};

export const subtitle = ({size}: SubtitleOptions) => `
  ${fontFamily}
  ${sizes(size)}
  color: currentColor;
  font-weight: 550; /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */
  letter-spacing: 0;
`;
