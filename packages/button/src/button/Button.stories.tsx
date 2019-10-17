import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, select, boolean} from '@storybook/addon-knobs';
import {ButtonProps, Button} from '.';
import {ChevronLeft, Home} from '@salad-ui/icon';

export default {
  title: 'components/Button',
};

const Example = ({
  title,
  props,
}: {
  title: React.ReactNode;
  props?: Partial<ButtonProps>;
}) => (
  <tr>
    <th>{title}</th>
    <td>
      <Button variant="tertiary" onClick={action('Save Draft')} {...props}>
        Save Draft
      </Button>
    </td>
    <td>
      <Button variant="secondary" onClick={action('Preview')} {...props}>
        Preview
      </Button>
    </td>
    <td>
      <Button variant="primary" onClick={action('Publish')} {...props}>
        Publish
      </Button>
    </td>
  </tr>
);

export const Demo = () => (
  <Button
    before={text('before', '')}
    after={text('after', '')}
    variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    isCompact={boolean('isCompact', false)}
    isFullWidth={boolean('isFullWidth', false)}
    isDestructive={boolean('isDestructive', false)}
    isDisabled={boolean('isDisabled', false)}
  >
    {text('children', 'Click me!')}
  </Button>
);

export const Variations = () => (
  <table style={{width: '100%'}}>
    <tbody>
      <Example title="Normal" />
      <Example title="compact" props={{isCompact: true}} />
      <Example title="full width" props={{isFullWidth: true}} />
      <Example title="destructive" props={{isDestructive: true}} />
      <Example title="disabled" props={{isDisabled: true}} />
      <Example
        title="before"
        props={{before: <ChevronLeft aria-hidden={true} />}}
      />
      <Example title="after" props={{after: <Home aria-hidden={true} />}} />
    </tbody>
  </table>
);

export const Element = () => (
  <table>
    <thead>
      <tr>
        <th>as</th>
        <th>demo</th>
      </tr>
    </thead>
    <tbody>
      <Example title="a" props={{href: 'https://www.example.com'}} />
      <Example title="button" props={{onClick: action('Clicked')}} />
    </tbody>
  </table>
);
