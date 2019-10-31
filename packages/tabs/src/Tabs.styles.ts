import styled from 'styled-components';
import {get} from '@salad-ui/color';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 48px;
  box-shadow: inset 0 -1px 0 0 ${get('border')};
`;
