import {Link as GatsbyLink} from 'gatsby';
import styled from 'styled-components';
import {color} from '@salad-ui/color';
import {body} from '@salad-ui/typography';
import {my} from '@salad-ui/spacing';

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  ${my(0.5)}
  ${body({isSmall: true})}
  text-decoration: none;

  &,
  &:hover {
    ${color('onSurface')}
  }
`;

export const Icon = styled.span``;

export const Text = styled.span`
  font-weight: bold;
`;
