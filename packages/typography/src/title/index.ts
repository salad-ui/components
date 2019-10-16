import styled from 'styled-components';
import {
  m,
  MarginProps,
  marginProps,
  PaddingProps,
  paddingProps,
} from '@salad-ui/spacing';
import {ColorProps, colorProps} from '@salad-ui/color/src';
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
  letter-spacing: 0;
`;

export const Title = styled.h1<
  TitleOptions & ColorProps & MarginProps & PaddingProps
>`
  ${m(0)}
  ${title}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
`;
