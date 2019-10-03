import styled from 'styled-components';
import {body, caption} from '@salad-ui/typography';
import {color} from '@salad-ui/color';
import {m, mt, mb} from '@salad-ui/spacing';

export const Wrapper = styled.div``;

export interface MessageProps {
  isError: boolean;
}

export const Label = styled.label<MessageProps>`
  display: block;
  ${mb(0.5)}
  ${body({isSmall: true})}
  ${color('onSurface.main')}
  ${({isError}) => isError && color('error.main')}
`;

export const Message = styled.p<MessageProps>`
  display: block;
  ${m(0)}
  ${mt(0.5)}
  ${color('onSurface.subtle')}
  ${caption()}
  ${({isError}) => isError && color('error.main')}
`;
