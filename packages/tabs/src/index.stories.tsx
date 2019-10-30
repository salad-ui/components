import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Tabs} from '.';

export default {
  title: 'components/Tabs',
};

export const Demo = () => (
  <Tabs>
    <Tabs.Tab role="link" href="#link">
      Link
    </Tabs.Tab>
    <Tabs.Tab role="link" onClick={action('Click')}>
      Button
    </Tabs.Tab>
    <Tabs.Tab role="link" href="#link" isActive>
      Active Link
    </Tabs.Tab>
  </Tabs>
);
