import styled from 'styled-components';

export const FlexyBase = styled.div<{align: string; justify: string}>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({justify}) => `
    justify-content: ${justify};
  `}
  ${({align}) => `
    align-items: ${align};
  `}

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Item = styled.div`
  min-width: 0;
  min-height: 0;
`;

export const Block = styled.div`
  min-width: 0;
  min-height: 0;
  flex: 1;
`;
