import * as React from 'react';
import styled from 'styled-components';
import {m} from '@salad-ui/spacing';
import {box, BoxProps} from '@salad-ui/box';
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

export interface TitleProps extends TitleOptions, BoxProps {}

const Element: React.ComponentType<TitleProps> = styled.div<TitleProps>`
  ${m(0)}
  ${title}
  ${box}
` as React.ComponentType<TitleProps>;

export const Title: React.FC<TitleProps> = props => <Element {...props} />;
