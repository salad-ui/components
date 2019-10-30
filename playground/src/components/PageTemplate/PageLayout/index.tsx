import * as React from 'react';
import {
  Wrapper,
  HeaderWrapper,
  LeftWrapper,
  ContentWrapper,
} from './index.style';

export interface PageLayoutProps {
  children: {
    header: React.ReactNode;
    left: React.ReactNode;
    right?: React.ReactNode;
    content: React.ReactNode;
  };
}

export const PageLayout: React.FC<PageLayoutProps> = ({
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
