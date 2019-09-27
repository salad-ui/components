import * as React from 'react';
import styled from 'styled-components';
import {gte, gt, lte, lt} from '.';

const style = `
  margin: 1em;
  width: 100px;
  height: 100px;
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

const GreaterThanOrEqualToExample = styled.div`
  ${style}
  ${gte('mobile')`
    background-color: red;
  `}
  ${gte('tablet')`
    background-color: green;
  `}
  ${gte('desktop')`
    background-color: blue;
  `}
`;

const GreaterThanExample = styled.div`
  ${style}
  ${gt('mobile')`
    background-color: red;
  `}
  ${gt('tablet')`
    background-color: green;
  `}
  ${gt('desktop')`
    background-color: blue;
  `}
`;

const LessThanOrEqualToExample = styled.div`
  ${style}
  ${lte('mobile')`
    background-color: red;
  `}
  ${lte('tablet')`
    background-color: green;
  `}
  ${lte('desktop')`
    background-color: blue;
  `}
`;

const LessThanExample = styled.div`
  ${style}
  ${lt('mobile')`
    background-color: red;
  `}
  ${lt('tablet')`
    background-color: green;
  `}
  ${lt('desktop')`
    background-color: blue;
  `}
`;

export default {
    title: 'foundations/breakpoint',
};

export const greaterThanOrEqualTo = () => (
  <>
    <Red>Red</Red> on <code>mobile</code>, <Green>green</Green> on{' '}
    <code>tablet</code> and <Blue>blue</Blue> on <code>desktop</code>.
    <GreaterThanOrEqualToExample />
  </>
);

export const greaterThan = () => (
  <>
    <Red>Red</Red> on <code>mobile</code>, <Green>green</Green> on{' '}
    <code>tablet</code> and <Blue>blue</Blue> on <code>desktop</code>.
    <GreaterThanExample />
  </>
);

// FIXME:
export const lessThanOrEqualTo = () => (
  <>
    <Red>Red</Red> on <code>mobile</code>, <Green>green</Green> on{' '}
    <code>tablet</code> and <Blue>blue</Blue> on <code>desktop</code>.
    <LessThanOrEqualToExample />
  </>
);

// FIXME:
export const lessThan = () => (
  <>
    <Red>Red</Red> on <code>mobile</code>, <Green>green</Green> on{' '}
    <code>tablet</code> and <Blue>blue</Blue> on <code>desktop</code>.
    <LessThanExample />
  </>
);
