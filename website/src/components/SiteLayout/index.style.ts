import styled from 'styled-components';
import {container} from '../../mixins/container';
import {fadeIn} from '../../mixins/fadeIn';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  ${container}
`;

export const SidebarWrapper = styled.div`
  min-width: 298px;
`;

export const ContentWrapper = styled.div<{isFullWidth: boolean}>`
  grid-column: ${({isFullWidth}) =>
    isFullWidth ? `1 / span 4` : `2 / span 3`};
  ${fadeIn}
`;
