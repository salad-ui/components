import {addDecorator} from '@storybook/react';
import {withContexts} from '@storybook/addon-contexts/react';
import {Theme} from '@salad-ui/theme';

addDecorator(
  withContexts([
    {
      title: 'Themes',
      components: [Theme],
      params: [{name: 'Default Theme', props: {}}],
    },
  ]),
);
