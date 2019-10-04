import styled from 'styled-components';
import {m} from '@salad-ui/spacing';
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

export const Subtitle = styled.h1<SubtitleOptions>`
  ${m(0)}
  ${subtitle}
`;
