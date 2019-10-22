import * as React from 'react';
import styled from 'styled-components';
import {BoxProps, Box} from '@salad-ui/box';
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

const SubtitleStyle = styled(Box).attrs<Partial<SubtitleProps>>({
  $omitProps: ['isSmall'],
})<SubtitleProps>`
  ${subtitle}
`;

SubtitleStyle.defaultProps = {
  margin: 0,
  component: 'p',
};

export const Subtitle: React.FC<SubtitleProps> = props => (
  <SubtitleStyle {...props} />
);
