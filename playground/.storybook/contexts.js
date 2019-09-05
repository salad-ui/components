import {addDecorator} from '@storybook/react';
import withContexts from '@storybook/addon-contexts/react';
import {wordpress} from '@design-system-example/theme';
import {ThemeProvider} from 'styled-components';

addDecorator(
  withContexts([
    {
      icon: 'paintbrush',
      title: 'Theme',
      components: [ThemeProvider],
      params: [
        {name: 'WordPress Theme', props: {theme: wordpress}, default: true},
        {
          name: 'Green Theme',
          props: {
            theme: {
              ...wordpress,
              color: {
                ...wordpress.color,
                button: '#008710',
              },
            },
          },
        },
        {
          name: 'Pink Theme',
          props: {
            theme: {
              ...wordpress,
              color: {
                ...wordpress.color,
                button: '#c9356e',
              },
            },
          },
        },
      ],
    },
  ]),
);
