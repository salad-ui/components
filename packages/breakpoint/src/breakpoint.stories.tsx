import * as React from 'react';
import styled from 'styled-components';
import {breakpoint, map} from '.';

const style = `
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 1em;
  width: 200px;
  height: 200px;
`;

const Red = styled.span`
  color: red;
`;

const Green = styled.span`
  color: green;
`;

const Blue = styled.span`
  color: blue;
`;

const GreaterThanExample = styled.span`
  ${style}
  ${breakpoint('mobile')`
    background-color: red;
  `}
  ${breakpoint('tablet')`
    background-color: green;
  `}
  ${breakpoint('desktop')`
    background-color: blue;
  `}
`;

const BetweenExample = styled.span`
  ${style}
  background-color: blue;
  ${breakpoint('mobile', 'tablet')`
    background-color: red;
  `}
  ${breakpoint('tablet', 'desktop')`
    background-color: green;
  `}
`;

const MapExample = styled.span`
  ${style}
  ${map(
    {mobile: 'red', tablet: 'green', desktop: 'blue'},
    color => `background-color: ${color}`,
  )}
`;

export default {
  title: 'foundations/breakpoints',
};

export const Breakpoint = () => (
  <>
    <Red>Red</Red> on <code>mobile</code>, <Green>green</Green> on{' '}
    <code>tablet</code> and <Blue>blue</Blue> on <code>desktop</code>.
    <GreaterThanExample>
      <code>breakpoint(&lt;a&gt;)``</code>
    </GreaterThanExample>
    <BetweenExample>
      <code>breakpoint(&lt;a&gt;, &lt;b&gt;)``</code>
    </BetweenExample>
    <MapExample>
      <code>map(&lt;values&gt;, &lt;fn&gt;)</code>
    </MapExample>
  </>
);
