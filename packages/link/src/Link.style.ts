import styled from 'styled-components';
import {color} from '@salad-ui/color';

export interface AnchorProps {
  isSubtle?: boolean;
}

const subtle = ({isSubtle}: AnchorProps) => isSubtle && `color: currentColor;`;

export const Anchor = styled.a<AnchorProps>`
  ${color('primary.normal')};
  cursor: pointer;
  text-decoration: underline;
  ${subtle}

  :hover, :focus {
    ${color('primary.dark')};
  }

  :active {
    ${color('primary.light')};
  }
`;
