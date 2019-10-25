import styled from 'styled-components';
import {marginProps, ml} from '@salad-ui/spacing';
import {Element} from '../button/Button.styles';

export const Wrapper = styled.div`
  ${marginProps}
  ${Element} + ${Element} {
    ${ml(1)}
  }
`;
