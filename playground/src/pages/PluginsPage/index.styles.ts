import styled from 'styled-components';
import {spacings, marginTop, paddingX} from '@salad-ui/spacing';
import {breakpoint} from '@salad-ui/breakpoint';

export const Grid = styled.div`
  display: grid;
  ${breakpoint('mobile')`
    grid-template-columns: 1fr;
    grid-row-gap: ${spacings[1]};
  `}
  ${breakpoint('desktop')`
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${spacings[2]};
    grid-column-gap: ${spacings[2]};
  `}
  ${marginTop(2)}
  ${paddingX({mobile: 2, tablet: 3})}
`;
