import {addDecorator} from '@storybook/react';
import {withContexts} from '@storybook/addon-contexts/react';
import {Theme, theme} from '@salad-ui/theme';

// TODO: look into https://github.com/echoulen/storybook-addon-styled-component-theme or https://github.com/storybookjs/storybook/issues/5889 to fix
// themes breaking on update

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
                secondary: {
                  ...theme.color.secondary,
                  light: '#f283aa',
                  main: '#c9356e',
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
