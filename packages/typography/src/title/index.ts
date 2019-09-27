import styled from 'styled-components';
import {m} from '@salad-ui/spacing';
import {fontFamily, fontWeightNormal} from '../common';

export type TitleSize = 'small' | 'medium' | 'large';

export interface TitleOptions {
  size: TitleSize;
}

const sizes = ({size}: TitleOptions) => {
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

export const title = ({size}: TitleOptions) => `
  ${fontFamily}
  ${fontWeightNormal}
  ${sizes({size})}
  color: currentColor;
  letter-spacing: 0;
`;

export const Title = styled.h1`
  ${m(0)}
  ${title}
`;
