import styled from 'styled-components';
import {m, mb, mx, p, px, py} from '@salad-ui/spacing';

const codeStyle = `
  ${p(0)}
  font-family: monospace;
  background: none;
`;

export const List = styled.ul`
  ${m(0)}
  ${p(0)}
  list-style-type: none;
`;

export const Prop = styled.li`
  ${mb(3)}
  border-bottom: 1px dashed #ccc;
  :last-child {
    border-bottom: none;
  }
`;

export const PropName = styled.code`
  ${codeStyle}
  display: block;
  font-weight: bold;
`;

export const PropDetail = styled.code`
  ${mx(1)}
  ${codeStyle}
`;

export const PropType = styled.span`
  color: #932981;
`;

export const PropDefault = styled.span``;

export const PropRequired = styled.span`
  ${px(2)}
  ${py(1)}
  color: #000;
  background-color: #ffccd0;
  font-weight: bold;
  border-radius: 3px;
`;
