import styled, {css} from 'styled-components';
import {m, mt} from '@salad-ui/spacing';
import {color, borderColor} from '@salad-ui/color';
import {
  TitleOptions,
  SubtitleOptions,
  BodyOptions,
  body,
  button,
  caption,
  overline,
  subtitle,
  title,
} from '@salad-ui/typography';

export const Wrapper = styled.div``;

const commonStyle = css`
  ${m(0)}
  ${mt(1)}
  ${color('onSurface.subtle')}
  ${borderColor('border.light')}
  vertical-align: text-bottom;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
`;

export const Title = styled.p<TitleOptions>`
  ${commonStyle}
  ${title}
`;

export const Subtitle = styled.p<SubtitleOptions>`
  ${commonStyle}
  ${subtitle}
`;

export const Body = styled.p<BodyOptions>`
  ${commonStyle}
  ${body}
`;

export const Button = styled.p`
  ${commonStyle}
  ${button}
`;

export const Caption = styled.p`
  ${commonStyle}
  ${caption}
`;

export const Overline = styled.p`
  ${commonStyle}
  ${overline}
`;
