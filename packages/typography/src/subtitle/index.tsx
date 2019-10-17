import * as React from 'react';
import styled from 'styled-components';
import {m} from '@salad-ui/spacing';
import {box, BoxProps} from '@salad-ui/box';
import {fontFamily, fontWeightSemibold} from '../common';

export interface SubtitleOptions {
  isSmall?: boolean;
}

const sizes = ({isSmall}: SubtitleOptions) => {
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

export const subtitle = ({isSmall}: SubtitleOptions = {}) => `
  ${fontFamily}
  ${fontWeightSemibold}
  ${sizes({isSmall})}
  letter-spacing: 0;
`;

export interface SubtitleProps extends SubtitleOptions, BoxProps {}

const Element = styled.div<SubtitleProps>`
  ${m(0)}
  ${subtitle}
  ${box}
` as React.ComponentType<SubtitleProps>;

export const Subtitle: React.FC<SubtitleProps> = props => (
  <Element {...props} />
);
