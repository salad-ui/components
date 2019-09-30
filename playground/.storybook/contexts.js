import {addDecorator} from '@storybook/react';
import {withContexts} from '@storybook/addon-contexts/react';
import {Theme, theme} from '@salad-ui/theme';

addDecorator(
  withContexts([
    {
      title: 'Themes',
      components: [Theme],
      params: [
        {name: 'Default Theme', props: {theme}, default: true},
        {
          name: 'Pink Theme',
          props: {
            theme: {
              ...theme,
              color: {
                ...theme.color,
                primary: {
                  ...theme.color.primary,
                  light: '#f283aa',
                  normal: '#c9356e',
                  dark: '#700f3b',
                },
              },
            },
          },
        },
      ],
    },
  ]),
);
