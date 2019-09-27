import * as React from 'react';
import styled from 'styled-components';
import {Spacing, p, px, py, pt, pr, pb, pl, spacings} from '.';

type SpacingFunction = typeof p;

interface SpacingExampleProps {
    size: Spacing /*| Spacing[]*/;
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

/* eslint-disable @typescript-eslint/no-explicit-any */
// Object.keys() always returns a string[]
const PaddingStory = ({fn}: {fn: SpacingFunction}) => (
  <>
    {((Object.keys(spacings).sort() as any) as Spacing[]).map(spacing => (
        <PaddingExample key={spacing} fn={fn} size={spacing}>
            {spacing}
        </PaddingExample>
    ))}
    {/* TODO: <br/>
    <PaddingExample fn={fn} size={{}}>
      Responsive
    </PaddingExample> */}
  </>
);
/* eslint-enable @typescript-eslint/no-explicit-any */

export default {
    title: 'foundations/spacing/padding',
};

export const padding = () => <PaddingStory fn={p} />;
export const paddingX = () => <PaddingStory fn={px} />;
export const paddingY = () => <PaddingStory fn={py} />;
export const paddingTop = () => <PaddingStory fn={pt} />;
export const paddingRight = () => <PaddingStory fn={pr} />;
export const paddingBottom = () => <PaddingStory fn={pb} />;
export const paddingLeft = () => <PaddingStory fn={pl} />;
