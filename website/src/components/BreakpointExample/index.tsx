import * as React from 'react';
import styled, {css} from 'styled-components';
import breakpoint, {BreakpointName} from '@salad-ui/breakpoint';
import {p, mr} from '@salad-ui/spacing';
import {color, backgroundColor, ColorName} from '@salad-ui/color';

const Breakpoints = styled.ul`
  ${p(0)}
`;

const Breakpoint = styled.li<{
  breakpoint: BreakpointName;
  unmatchedColor?: ColorName;
  matchedColor: ColorName;
}>`
  display: flex;
  align-items: center;
  ${p(2)}
  ${({breakpoint: name, unmatchedColor, matchedColor}) => css`
    background-color: ${unmatchedColor};
    ${breakpoint(name)`
      ${color('onSecondary')}
      ${backgroundColor(matchedColor)}
    `}
  `}
`;

const Name = styled.span`
  flex-basis: 15%;
  ${mr(2)}
`;

const Description = styled.span`
  flex-grow: 2;
`;

const Icon = styled.span``;

const Emoji = ({glyph, label}: {glyph: string; label: string}) => (
  <Icon role="img" aria-label={label}>
    {glyph}
  </Icon>
);

export const BreakpointExample = () => (
  <>
    <Breakpoints>
      <Breakpoint breakpoint="mobile" matchedColor="secondary.light">
        <Name>
          <strong>Mobile</strong> &mdash; <code>0px</code>
        </Name>
        <Description>Targetting all devices</Description>
        <Emoji glyph="📱" label="A mobile device." />
      </Breakpoint>
      <Breakpoint breakpoint="tablet" matchedColor="secondary">
        <Name>
          <strong>Tablet</strong> &mdash; <code>737px</code>
        </Name>
        <Description>
          Targetting all devices <em>larger</em> than the iPhone 6 Plus
        </Description>
        <Emoji glyph="💻" label="A tablet device." />
      </Breakpoint>
      <Breakpoint breakpoint="desktop" matchedColor="secondary.dark">
        <Name>
          <strong>Desktop</strong> &mdash; <code>1195px</code>
        </Name>
        <Description>
          Targetting all devices <em>larger</em> than the 11&quot; iPad Pro
        </Description>
        <Emoji glyph="🖥" label="A desktop device." />
      </Breakpoint>
    </Breakpoints>
  </>
);
