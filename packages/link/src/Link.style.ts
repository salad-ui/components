import styled from 'styled-components';
import {color} from '@salad-ui/color';

export interface AnchorProps {
  isSubtle?: boolean;
}

const subtle = ({isSubtle}: AnchorProps) => isSubtle && `color: currentColor;`;

export const Anchor = styled.a<AnchorProps>`
  ${color('secondary.main')};
  cursor: pointer;
  text-decoration: underline;
  ${subtle}

  :hover, :focus {
    ${color('secondary.dark')};
  }

  :active {
    ${color('secondary.light')};
  }
`;
