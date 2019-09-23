import {TreatProvider} from 'react-treat';
import {addDecorator} from '@storybook/react';
import {withContexts} from '@storybook/addon-contexts/react';
import {theme} from './theme.treat';

addDecorator(
  withContexts([
    {
      title: 'Themes',
      components: [TreatProvider],
      params: [{name: 'Default Theme', props: {theme}}],
    },
  ]),
);
