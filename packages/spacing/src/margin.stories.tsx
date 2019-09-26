import * as React from 'react';
import styled from 'styled-components';
import {Spacing, m, mx, my, mt, mr, mb, ml} from '.';

type SpacingFunction = typeof m;

interface SpacingExampleProps {
    size: Spacing | Spacing[];
    fn: SpacingFunction;
}

const MarginInner = styled.div<SpacingExampleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: white;
  background-color: darkorange;
  ${({size, fn}) => fn(size)}
`;

const MarginOuter = styled.div`
  margin: 1em;
  display: inline-block;
  background-color: darkviolet;
`;

const MarginExample: React.FC<SpacingExampleProps> = ({fn, size, children}) => (
    <MarginOuter>
        <MarginInner fn={fn} size={size}>
            {children}
        </MarginInner>
    </MarginOuter>
);

const MarginStory = ({fn}: {fn: SpacingFunction}) => (
  <>
    <MarginExample fn={fn} size="xs">
      Static
    </MarginExample>
    <MarginExample fn={fn} size={['xs', 'md', 'xl']}>
      Responsive
    </MarginExample>
  </>
);

export default {
    title: 'spacing/margin',
};

export const margin = () => <MarginStory fn={m} />;
export const marginX = () => <MarginStory fn={mx} />;
export const marginY = () => <MarginStory fn={my} />;
export const marginTop = () => <MarginStory fn={mt} />;
export const marginRight = () => <MarginStory fn={mr} />;
export const marginBottom = () => <MarginStory fn={mb} />;
export const marginLeft = () => <MarginStory fn={ml} />;
