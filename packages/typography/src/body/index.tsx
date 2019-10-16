import * as React from 'react';
import styled from 'styled-components';
import {m} from '@salad-ui/spacing';
import {box, BoxProps} from '@salad-ui/box';
import {fontFamily, fontWeightNormal} from '../common';

export interface BodyOptions {
  isSmall?: boolean;
}

export const sizes = ({isSmall = false}: BodyOptions) => {
  if (isSmall) {
    return `
      font-size: 14px;
      line-height: 20px;
    `;
  } else {
    return `
      font-size: 16px;
      line-height: 24px;
    `;
  }
};

export const body = ({isSmall}: BodyOptions = {}) => `
  ${fontFamily}
  ${fontWeightNormal}
  ${sizes({isSmall})}
  letter-spacing: 0;
`;

export interface BodyProps extends BodyOptions, BoxProps {}

const Element: React.ComponentType<BodyProps> = styled.div<BodyProps>`
  ${m(0)}
  ${body}
  ${box}
` as React.ComponentType<BodyProps>;

export const Body: React.FC<BodyProps> = props => <Element {...props} />;
