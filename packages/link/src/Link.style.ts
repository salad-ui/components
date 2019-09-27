import styled from 'styled-components';

export interface AnchorProps {
    isSubtle?: boolean;
}

const subtle = ({isSubtle}: AnchorProps) => isSubtle && `color: currentColor;`;

export const Anchor = styled.a<AnchorProps>`
  color: ${({theme}) => theme.color.primary.medium};
  ${subtle}
  cursor: pointer;
  text-decoration: underline;

  :hover {
  }

  :active {
  }

  :focus {
  }
`;
