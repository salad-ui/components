import React from 'react';
import {text, select} from '@storybook/addon-knobs';
import {Spacing, spacings} from '@salad-ui/spacing';
import {Box} from '.';

export default {
  title: 'components/Box',
};

type OptionKey = Spacing | '';
const spacingOptions: OptionKey[] = [
  '',
  ...((Object.keys(spacings)
    .map(v => parseFloat(v))
    .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0)) as unknown) as OptionKey[]),
];
const createSpacingKnob = (property: string, defaultValue: OptionKey = '') =>
  select(property, spacingOptions, defaultValue) || undefined;

export const Demo = () => (
  <>
    <Box
      color={text('color', 'onSecondary')}
      backgroundColor={text('backgroundColor', 'secondary.main')}
      margin={createSpacingKnob('margin')}
      marginX={createSpacingKnob('marginX')}
      marginY={createSpacingKnob('marginY')}
      marginTop={createSpacingKnob('marginTop')}
      marginRight={createSpacingKnob('marginRight')}
      marginBottom={createSpacingKnob('marginBottom')}
      marginLeft={createSpacingKnob('marginLeft')}
      padding={createSpacingKnob('padding')}
      paddingX={createSpacingKnob('paddingX', 6)}
      paddingY={createSpacingKnob('paddingY', 3)}
      paddingTop={createSpacingKnob('paddingTop')}
      paddingRight={createSpacingKnob('paddingRight')}
      paddingBottom={createSpacingKnob('paddingBottom')}
      paddingLeft={createSpacingKnob('paddingLeft')}
    >
      Some content in a box!
    </Box>
  </>
);
