import styled from 'styled-components';
import breakpoint from '@salad-ui/breakpoint';
import {grid, unit} from '@salad-ui/grid';
import {backgroundColor, borderBottomColor} from '@salad-ui/color';
import {marginX, marginBottom, paddingX, paddingY} from '@salad-ui/spacing';

export const Wrapper = styled.nav`
${grid({reverse: {mobile: true, tablet: false}})}
  /* fixing a grid bug with the reverse prop that needs to be fixed */
  ${breakpoint('mobile')` 
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  `}
  ${breakpoint('tablet')` 
    flex-direction: row;
    flex-wrap: wrap;
  `}
  ${marginX({mobile: 0, tablet: 3})}
  border-bottom: 1px solid;
  ${borderBottomColor('border.light')}
`;

export const TabsWrapper = styled.div`
  flex-grow: 1;
  ${unit({size: {mobile: 1, tablet: 'max'}})}
  ${backgroundColor('surface')}
`;

export const Tab = styled.div`
  ${paddingX(2)}
`;

export const SearchWrapper = styled.div`
  ${unit({size: {mobile: 1, tablet: 'min'}})}
  ${marginBottom({mobile: 2, tablet: 0})}
  ${paddingX({mobile: 2, tablet: 1})} 
  ${paddingY({mobile: 0, tablet: 1})}
  ${backgroundColor({mobile: 'transparent', tablet: 'surface'})}
`;
