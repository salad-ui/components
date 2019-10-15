import styled, {css} from 'styled-components';
import {Spacing, m, mb} from '@salad-ui/spacing';
import {overline} from '@salad-ui/typography';
import {color} from '@salad-ui/color';

type SpacingFunction = typeof m;

export interface SpacingExampleProps {
  size: Spacing /* | Spacing[] */;
  fn: SpacingFunction;
}

export const Heading = styled.p`
  ${m(0)}
  ${color('onSurface.subtle')}
  ${overline}
`;

export const Examples = styled.div`
  ${mb(3)}
`;

const outerStyle = css`
  ${m(2)}
  display: inline-block;
`;

const innerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: white;
`;

export const MarginOuter = styled.div`
  ${outerStyle}
  background-color: darkviolet;
`;

export const MarginInner = styled.div<SpacingExampleProps>`
  ${innerStyle}
  background-color: darkorange;
  ${({size, fn}) => fn(size)}
`;

export const PaddingOuter = styled.div<SpacingExampleProps>`
  ${outerStyle}
  background-color: darkorange;
  ${({size, fn}) => fn(size)}
`;

export const PaddingInner = styled.div`
  ${innerStyle}
  background-color: darkviolet;
`;
