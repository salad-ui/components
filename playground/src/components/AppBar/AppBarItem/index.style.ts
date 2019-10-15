import styled, { css } from 'styled-components';
import { mr, ml, px, p } from '@salad-ui/spacing';
import { color, backgroundColor } from '@salad-ui/color';
import { subtitle, body } from '@salad-ui/typography';
import { DrawerItemVariant } from './types';

export interface WrapperProps {
  variant: DrawerItemVariant;
  isActive?: boolean;
}

const commonStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  ${p(0)}
  ${px(2)}
  cursor: pointer;
  ${color('onPrimary')}
  background: none;
  border: none;
  text-decoration: none;

  :hover {
    ${backgroundColor('primary.light')}
  }

  :active {
    ${backgroundColor('primary.dark')}
  }

`;

export const Wrapper = styled.a<WrapperProps>`
  ${commonStyle}
`;

export const BeforeWrapper = styled.span`
  display: inline-flex;
  ${mr(2)}
`;

export const AfterWrapper = styled.span`
  display: inline-flex;
  ${ml(2)}
`;
