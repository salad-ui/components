import React from 'react';
import {action} from '@storybook/addon-actions';
import {ButtonGroup} from '.';

export default {
  title: 'components/button/ButtonGroup',
};

export const Example = () => (
  <ButtonGroup>
    <ButtonGroup.Button variant="secondary" onClick={action('Click')}>
      Install
    </ButtonGroup.Button>
    <ButtonGroup.Button variant="tertiary" onClick={action('Click')}>
      More details
    </ButtonGroup.Button>
  </ButtonGroup>
);

export const Compact = () => (
  <ButtonGroup isCompact>
    <ButtonGroup.Button variant="secondary" onClick={action('Click')}>
      Install
    </ButtonGroup.Button>
    <ButtonGroup.Button variant="tertiary" onClick={action('Click')}>
      More details
    </ButtonGroup.Button>
  </ButtonGroup>
);
