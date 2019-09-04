import {fontFamily} from './common';

export type BodySize = 'default' | 'sm';

export interface BodyOptions {
  size?: BodySize;
}

const bodySize = (size: BodySize) => {
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

export const body = ({size = 'default'}: BodyOptions = {}) => `
  color: currentColor;
  ${fontFamily}
  font-weight: normal;
  ${bodySize(size)}
  letter-spacing: 0;
`;
