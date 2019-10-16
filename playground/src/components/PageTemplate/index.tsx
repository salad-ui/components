import * as React from 'react';
import {
  Wrapper,
  HeaderWrapper,
  LeftWrapper,
  ContentWrapper,
} from './index.style';

export interface PageTemplateProps {
  children: {
    header: React.ReactNode;
    left: React.ReactNode;
    right?: React.ReactNode;
    content: React.ReactNode;
  };
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children: {header, left, content},
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>{header}</HeaderWrapper>
      <LeftWrapper>{left}</LeftWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  );
};
