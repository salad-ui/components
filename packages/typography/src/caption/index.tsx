import * as React from 'react';
import styled from 'styled-components';
import {Box, BoxProps} from '@salad-ui/box';
import {fontFamily, fontWeightNormal} from '../common';

export const caption = () => `
  ${fontFamily}
  ${fontWeightNormal}
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
`;

const CaptionStyle = styled(Box)<BoxProps>`
  ${caption()}
`;

export const Caption: React.FC<BoxProps> = props => <CaptionStyle {...props} />;
