import styled from 'styled-components';
import {
  m,
  MarginProps,
  marginProps,
  PaddingProps,
  paddingProps,
} from '@salad-ui/spacing';
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

export const Body = styled.p<BodyOptions & MarginProps & PaddingProps>`
  ${m(0)}
  ${body}
  ${marginProps}
  ${paddingProps}
`;
