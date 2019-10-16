import * as React from 'react';
import {Spacing, spacings, m, p} from '@salad-ui/spacing';
import {
  SpacingExampleProps,
  Heading,
  Examples,
  MarginOuter,
  MarginInner,
  PaddingOuter,
  PaddingInner,
} from './index.styles';

const MarginExample: React.FC<SpacingExampleProps> = ({fn, size}) => (
  <MarginOuter>
    <MarginInner fn={fn} size={size}>
      <code>{size}</code>
    </MarginInner>
  </MarginOuter>
);

const PaddingExample: React.FC<SpacingExampleProps> = ({fn, size}) => (
  <PaddingOuter fn={fn} size={size}>
    <PaddingInner>
      <code>{size}</code>
    </PaddingInner>
  </PaddingOuter>
);

export const SpacingExample = () => (
  <>
    <Heading>Margin</Heading>
    <Examples>
      {((Object.keys(spacings).sort() as unknown) as Spacing[]).map(spacing => (
        <MarginExample key={spacing} fn={m} size={spacing} />
      ))}
    </Examples>

    <Heading>Padding</Heading>
    <Examples>
      {((Object.keys(spacings).sort() as unknown) as Spacing[]).map(spacing => (
        <PaddingExample key={spacing} fn={p} size={spacing} />
      ))}
    </Examples>
  </>
);
