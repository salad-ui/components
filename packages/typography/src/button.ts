import {fontFamily} from './common';

export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonOptions {
  size: ButtonSize;
}

const buttonSize = (size: ButtonSize) => {
  switch (size) {
    case 'lg':
      return `
      `;
    case 'md':
      return `
        font-size: 14px;
      `;
    case 'sm':
      return `
      `;
  }
};

export const button = ({size}: ButtonOptions = {size: 'md'}) => `
  color: currentColor;
  ${fontFamily}
  font-weight: 550; /* TODO: how do we want to handle semibold? can't really use another font variant since using system fonts?? */
  ${buttonSize(size)}
  letter-spacing: 0;
`;
