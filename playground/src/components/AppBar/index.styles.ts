import styled from 'styled-components';
import {backgroundColor} from '@salad-ui/color';
import {px} from '@salad-ui/spacing';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 40px;
  ${px(2)}
  ${backgroundColor('primary')}
`;

const wrapperStyle = `
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  grid-column: 1/1;
  ${wrapperStyle}
`;

export const LeftWrapper = styled.div`
  grid-column: 2/2;
  ${wrapperStyle}
`;

export const RightWrapper = styled.div`
  grid-column: 3/3;
  ${wrapperStyle}
`;
