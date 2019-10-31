import styled from 'styled-components';
import breakpoint from '@salad-ui/breakpoint';
import {grid, unit} from '@salad-ui/grid';
import {ColorName, get, backgroundColor} from '@salad-ui/color';
import {marginX, marginBottom, paddingX, paddingY} from '@salad-ui/spacing';

export const Wrapper = styled.nav`
${grid({reverse: {mobile: true, desktop: false}})}
  /* fixing a grid bug with the reverse prop that needs to be fixed */
  ${breakpoint('mobile')` 
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  `}
  ${breakpoint('desktop')` 
    flex-direction: row;
    flex-wrap: wrap;
  `}
  ${marginX({mobile: 0, tablet: 3})}
`;

export const TabsWrapper = styled.div`
  flex-grow: 1;
  ${unit({size: {mobile: 1, desktop: 'max'}})}
  ${backgroundColor('surface')}
`;

export const SearchWrapper = styled.div`
  ${unit({size: {mobile: 1, desktop: 'min'}})}
  ${marginBottom({mobile: 2, desktop: 0})}
  ${paddingX({mobile: 2, desktop: 1})} 
  ${paddingY({mobile: 0, desktop: 1})}
  ${backgroundColor({
    mobile: 'transparent' as ColorName,
    desktop: 'surface',
  })} /* FIXME: support other colors */
  ${breakpoint('desktop')`
    box-shadow: inset 0 -1px 0 0 ${get('border')};
  `}
`;
