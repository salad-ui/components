import React from 'react';
import {action} from '@storybook/addon-actions';
import {ButtonProps, Button} from '.';

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

export const Examples = () => (
  <table>
    <tbody>
      <Example title="Normal" />
      <Example title="isCompact" props={{isCompact: true}} />
      <Example title="isDestructive" props={{isDestructive: true}} />
      <Example title="isDisabled" props={{isDisabled: true}} />
      <Example title="before" props={{before: '⏪'}} />
      <Example title="after" props={{after: '⏩'}} />
    </tbody>
  </table>
);
