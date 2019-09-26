import {fontFamily} from '../common';

export type ButtonSize = 'small' | 'medium' | 'large';

const sizes = (size: ButtonSize) => {
    switch (size) {
        case 'small':
            return `
        font-size: 14px;
        line-height: 20px;
      `;
        case 'medium':
            return `
        font-size: 14px;
      `;
        case 'large':
            return `
      font-size: 16px;
      line-height: 24px;
      `;
    }
};

export interface ButtonOptions {
    size: ButtonSize;
}

export const button = ({size = 'medium'}: ButtonOptions) => `
  ${fontFamily}
  ${sizes(size)}
  font-weight: 550; /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */
  letter-spacing: 0;
`;
