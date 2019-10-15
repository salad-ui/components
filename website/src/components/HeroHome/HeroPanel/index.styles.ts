import styled from 'styled-components';
import {mt, mb, py} from '@salad-ui/spacing';
import {title, subtitle, body} from '@salad-ui/typography';
import {color} from '@salad-ui/color';

export const Wrapper = styled.div`
  ${py(6)}
`;

export const LogoLine = styled.div`
  display: flex;
`;

export const LogoText = styled.span`
  ${subtitle()}
`;

export const TitleLine = styled.div`
  ${mt(1)}
  ${title({size: 'large'})}
`;

export const SubtitleLine = styled.div`
  ${mt(1)}
  ${mb(2)}
  ${body()}
  ${color('onSurface.main')}
  max-width: 700px;
`;
