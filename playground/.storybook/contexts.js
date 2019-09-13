import {addDecorator} from '@storybook/react';
import withContexts from '@storybook/addon-contexts/react';

addDecorator(
  withContexts([
    {
      icon: 'paintbrush',
      title: 'Theme',
      components: [],
      params: [
        {name: 'WordPress Theme', props: {}, default: true},
        {
          name: 'Green Theme',
          props: {
            theme: {},
          },
        },
        {
          name: 'Pink Theme',
          props: {
            theme: {},
          },
        },
      ],
    },
  ]),
);
