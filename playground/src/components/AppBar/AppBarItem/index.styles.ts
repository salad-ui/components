import styled from 'styled-components';
import {mr, ml, px, p} from '@salad-ui/spacing';
import {color, backgroundColor} from '@salad-ui/color';
import {button} from '@salad-ui/typography';

export const Wrapper = styled.a`
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
  ${button()} :hover {
    ${backgroundColor('primary.light')}
  }

  :active {
    ${backgroundColor('primary.dark')}
  }
`;

export const BeforeWrapper = styled.span`
  display: inline-flex;
  ${mr(2)}
`;

export const AfterWrapper = styled.span`
  display: inline-flex;
  ${ml(2)}
`;
