import styled from 'styled-components';
import {p} from '@salad-ui/spacing';
import {color} from '@salad-ui/color';

export interface ElementProps {
  isSubtle?: boolean;
}

const subtle = ({isSubtle}: ElementProps) => isSubtle && `color: currentColor;`;

export const Element = styled.a<ElementProps>`
  display: inline-flex;
  ${p(0)}
  font-size: inherit;
  font-family: inherit;
  ${color('secondary')};
  border: none;
  cursor: pointer;
  text-decoration: underline;
  ${subtle} :hover,
  :focus {
    ${color('secondary.dark')};
  }

  :active {
    ${color('secondary.light')};
  }
`;
