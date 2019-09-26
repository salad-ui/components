import {fontFamily} from '../common';

export type BodySize = 'small' | 'large';

export const sizes = (size: BodySize) => {
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

export interface BodyOptions {
    size?: BodySize;
}

export const body = ({size = 'large'}: BodyOptions) => `
  ${fontFamily}
  ${sizes(size)}
  color: currentColor;
  font-weight: normal;
  letter-spacing: 0;
`;
