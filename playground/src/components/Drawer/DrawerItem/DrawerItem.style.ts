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

const itemVariantStyle = css`
  height: 40px;
  ${subtitle({isSmall: true})}
`;

const subitemVariantStyle = css<WrapperProps>`
  height: 32px;
  ${({isActive}) => isActive ? subtitle({isSmall: true}) : body({isSmall: true})}
`;

export const Wrapper = styled.a<WrapperProps>`
  ${commonStyle}
  ${({variant}) => {
    switch (variant) {
      case 'item': 
        return itemVariantStyle;
      case 'subitem':
        return subitemVariantStyle;
    }
  }}
`;

export const BeforeWrapper = styled.span`
  display: inline-flex;
  ${mr(2)}
`;

export const AfterWrapper = styled.span`
  display: inline-flex;
  ${ml(2)}
`;
