import * as React from 'react';
import styled from 'styled-components';
import {Box, BoxProps} from '@salad-ui/box';
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

const BodyStyle = styled(Box).attrs<Partial<BodyProps>>({
  propsToOmit: ['isSmall'],
})<BodyProps>`
  ${body}
`;

BodyStyle.defaultProps = {
  margin: 0,
  component: 'p',
};

export const Body: React.FC<BodyProps> = props => <BodyStyle {...props} />;
