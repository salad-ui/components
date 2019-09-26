import {fontFamily} from '../common';

export type DisplaySize = 'small' | 'medium' | 'large';

const sizes = (size: DisplaySize) => {
    switch (size) {
        case 'small':
            return `
        font-size: 20px;
        line-height: 28px;
      `;
        case 'medium':
            return `
        font-size: 24px;
        line-height: 32px;
      `;
        case 'large':
            return `
        font-size: 32px;
        line-height: 40px;
      `;
    }
};

export interface DisplayOptions {
    size: DisplaySize;
}

export const display = ({size}: DisplayOptions) => `
  ${fontFamily}
  ${sizes(size)}
  color: 'currentColor',
  fontWeight: 'normal',
  letterSpacing: 0,
`;
