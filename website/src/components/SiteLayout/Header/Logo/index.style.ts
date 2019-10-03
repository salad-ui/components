import {Link as GatsbyLink} from 'gatsby';
import styled from 'styled-components';
import {color} from '@salad-ui/color';
import {body} from '@salad-ui/typography';
import {m, mr, px} from '@salad-ui/spacing';

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  ${m(0.5)}
  ${px(1)}
  ${body({isSmall: true})}
  text-decoration: none;

  &,&:hover {
    ${color('onSurface.main')}
  }
`;

export const Icon = styled.span`
  ${mr(0.5)}
`;

export const Text = styled.span`
  font-weight: bold;
`;
