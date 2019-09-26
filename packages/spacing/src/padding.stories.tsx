import * as React from 'react';
import styled from 'styled-components';
import {Spacing, p, px, py, pt, pr, pb, pl} from '.';

type SpacingFunction = typeof p;

interface SpacingExampleProps {
    size: Spacing | Spacing[];
    fn: SpacingFunction;
}

const PaddingInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: white;
  background-color: darkviolet;
`;

const PaddingOuter = styled.div<SpacingExampleProps>`
  margin: 1em;
  display: inline-block;
  background-color: darkorange;
  ${({size, fn}) => fn(size)}
`;

const PaddingExample: React.FC<SpacingExampleProps> = ({
    fn,
    size,
    children,
}) => (
    <PaddingOuter fn={fn} size={size}>
        <PaddingInner>{children}</PaddingInner>
    </PaddingOuter>
);

const PaddingStory = ({fn}: {fn: SpacingFunction}) => (
  <>
    <PaddingExample fn={fn} size="xs">
      Static
    </PaddingExample>
    <PaddingExample fn={fn} size={['xs', 'md', 'xl']}>
      Responsive
    </PaddingExample>
  </>
);

export default {
    title: 'spacing/padding',
};

export const padding = () => <PaddingStory fn={p} />;
export const paddingX = () => <PaddingStory fn={px} />;
export const paddingY = () => <PaddingStory fn={py} />;
export const paddingTop = () => <PaddingStory fn={pt} />;
export const paddingRight = () => <PaddingStory fn={pr} />;
export const paddingBottom = () => <PaddingStory fn={pb} />;
export const paddingLeft = () => <PaddingStory fn={pl} />;
